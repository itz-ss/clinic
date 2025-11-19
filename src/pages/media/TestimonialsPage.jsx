// -------------------------------------------------------
// TESTIMONIALS PAGE — GLOBAL GRID (NO GROUPING) + LIGHTBOX
// -------------------------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchTestimonials } from "../../services/strapi";
import { STRAPI_URL } from "../../config";
import "../../styles/TestimonialsPage.css";

const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(30);

  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
  });

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // 🔥 Load testimonials
  useEffect(() => {
    const load = async () => {
      const data = await fetchTestimonials();
      setTestimonials(data || []);
      setLoading(false);
    };
    load();
  }, []);

  // Disable scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "auto";
  }, [lightbox.open]);

  const openLightbox = (items, index) => setLightbox({ open: true, items, index });
  const closeLightbox = () => setLightbox({ open: false, items: [], index: 0 });
  const nextItem = () =>
    setLightbox((p) => ({ ...p, index: (p.index + 1) % p.items.length }));
  const prevItem = () =>
    setLightbox((p) => ({ ...p, index: p.index === 0 ? p.items.length - 1 : p.index - 1 }));

  const shareItem = (item) => {
    const url = window.location.href;
    const text = `💬 ${item.title} — ${item.patientName}`;
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`;
    navigator.clipboard.writeText(url);
    return { whatsapp };
  };

  const renderLightboxMedia = (item) => {
    if (item.type === "videoEmbed")
      return <iframe className="lightbox-media" src={item.embedUrl} allowFullScreen />;
    if (item.type === "videoFile")
      return <video className="lightbox-media" src={item.fileUrl} controls autoPlay />;
    return <img className="lightbox-media" src={item.src} alt={item.title} />;
  };

  // 🔥 Flatten testimonial structure to display gallery / images / video
  const flattenTestimonials = testimonials.flatMap((t) => {
    const items = t.Testimonial ? [t.Testimonial] : [];
    const final = [];

    items.forEach((item, i) => {
      const base = {
        patientName: t.patientName,
        title: item.title,
        description: item.description,
      };

      // Thumbnail if available
      if (item.Thumbnail?.url) {
        final.push({
          ...base,
          type: "image",
          src: item.Thumbnail.formats?.medium?.url || item.Thumbnail.url,
          thumb: item.Thumbnail.formats?.thumbnail?.url || item.Thumbnail.url,
          id: `thumb-${t.id}-${i}`,
        });
      }

      // Gallery FIX — Cloudinary → item.gallery.data
      if (Array.isArray(item.gallery?.data)) {
        item.gallery.data.forEach((g, gi) =>
          final.push({
            ...base,
            type: "image",
            src: g.attributes.formats?.medium?.url || g.attributes.url,
            thumb: g.attributes.formats?.thumbnail?.url || g.attributes.url,
            id: `gal-${t.id}-${i}-${gi}`,
          })
        );
      }

      // YouTube embed
      if (item.videoLink) {
        let url = item.videoLink;
        if (url.includes("watch?v=")) url = url.replace("watch?v=", "embed/").split("&")[0];
        if (url.includes("youtu.be/"))
          url = "https://www.youtube.com/embed/" + url.split("youtu.be/")[1].split("?")[0];

        final.push({
          ...base,
          type: "videoEmbed",
          embedUrl: url,
          id: `yt-${t.id}-${i}`,
        });
      }

      // MP4 video
      if (item.videoFile?.url) {
        final.push({
          ...base,
          type: "videoFile",
          fileUrl: STRAPI_URL + item.videoFile.url,
          id: `vf-${t.id}-${i}`,
        });
      }
    });

    return final;
  });

  // 🔍 Search
  const filtered = flattenTestimonials.filter((x) => {
    const term = search.toLowerCase();
    return (
      x.title?.toLowerCase().includes(term) ||
      x.description?.toLowerCase().includes(term) ||
      x.patientName?.toLowerCase().includes(term)
    );
  });

  if (loading) return <p className="media-page">Loading testimonials...</p>;

  return (
    <div className="media-page">
      <header className="media-header">
        <h1>Testimonials</h1>
        <p>Real experiences and healing journeys</p>
      </header>

      {/* Search */}
      <div className="event-search-bar">
        <input
          type="text"
          placeholder="Search patient / title / description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="events-grid">
        {filtered.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={item.id}
            className="event-card"
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(filtered, index)}
          >
            {item.type === "image" && <img src={item.thumb} alt={item.title} className="event-thumb" />}
            {item.type === "videoEmbed" && <div className="event-video-icon">▶</div>}
            {item.type === "videoFile" && <div className="event-video-icon">🎬</div>}
            <p className="event-card-title">{item.patientName}</p>
          </motion.div>
        ))}
      </div>

      {/* LOAD MORE */}
      {filtered.length > visibleCount && (
        <div className="media-loadmore-wrapper">
          <button className="media-loadmore" onClick={() => setVisibleCount((v) => v + 30)}>
            Show More
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>
            ✕
          </button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevItem(); }}>
            ‹
          </button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextItem(); }}>
            ›
          </button>

          <div
            className="lightbox-media-wrapper"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
            onTouchEnd={(e) => {
              touchEndX.current = e.changedTouches[0].screenX;
              const diff = touchStartX.current - touchEndX.current;
              if (Math.abs(diff) > 60) diff > 0 ? nextItem() : prevItem();
            }}
          >
            <div className="lightbox-info">
              <h2>{lightbox.items[lightbox.index].title}</h2>
              <p>{lightbox.items[lightbox.index].patientName}</p>
            </div>

            {(() => {
              const item = lightbox.items[lightbox.index];
              const links = shareItem(item);
              return (
                <div className="lightbox-share">
                  <a href={links.whatsapp} target="_blank" rel="noreferrer" className="share-btn whatsapp">
                    WhatsApp
                  </a>
                </div>
              );
            })()}

            {renderLightboxMedia(lightbox.items[lightbox.index])}

            {lightbox.items[lightbox.index].description && (
              <div className="lightbox-description">
                <ReactMarkdown>{lightbox.items[lightbox.index].description}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsPage;
