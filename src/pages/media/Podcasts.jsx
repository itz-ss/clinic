// -------------------------------------------------------
// PODCASTS PAGE — PER-GUEST GRID (NO FOLDERS) + LIGHTBOX
// -------------------------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchPodcasts } from "../../services/strapi";
import { STRAPI_URL } from "../../config";
import "../../styles/Podcasts.css";

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [expandedGuests, setExpandedGuests] = useState({});

  // Lightbox
  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
  });

  const shareItem = (item) => {
    const url = window.location.href;
    const text = `🎙️ ${item.title} — ${item.guestName}`;
    const whatsapp = `https://wa.me/?text=${encodeURIComponent(text + "\n" + url)}`;
    const instagram = `https://www.instagram.com/?url=${encodeURIComponent(url)}`;
    return { whatsapp, instagram };
  };

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const load = async () => {
      const data = await fetchPodcasts();

      // 🔥 SORT NEWEST GUEST FIRST
      const sorted = [...(data || [])].sort(
        (a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt)
      );

      setPodcasts(sorted);
      setLoading(false);
    };
    load();
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox.open ? "hidden" : "auto";
  }, [lightbox.open]);

  useEffect(() => {
    if (!lightbox.open) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox.open, lightbox.items, lightbox.index]);

  // 🔥 Supports single & repeatable Podcast component
  const flattenPodcastToMedia = (podcast) => {
  const items = Array.isArray(podcast.Podcast)
    ? podcast.Podcast
    : podcast.Podcast
    ? [podcast.Podcast]
    : [];

  const result = [];

  items.forEach((item, i) => {
    const base = {
      guestName: podcast.guestName,
      guestDesignation: podcast.guestDesignation,
      title: item.title,
      description: item.description,
    };

    // 🔥 Thumbnail (NO STRAPI_URL prefix — Cloudinary already provides full URL)
    if (item.Thumbnail?.url) {
      result.push({
        ...base,
        type: "image",
        src: item.Thumbnail.formats?.medium?.url || item.Thumbnail.url,
        thumb: item.Thumbnail.formats?.small?.url || item.Thumbnail.url,
        id: `p-${podcast.id}-${i}-thumb`,
      });
    }

    // 🔥 Gallery (NO STRAPI_URL prefix)
    if (Array.isArray(item.gallery)) {
      item.gallery.forEach((img, g) => {
        result.push({
          ...base,
          type: "image",
          src: img.formats?.large?.url || img.formats?.medium?.url || img.url,
          thumb: img.formats?.thumbnail?.url || img.url,
          id: `p-${podcast.id}-${i}-gal-${g}`,
        });
      });
    }

    // 🔥 YouTube embed fix
    if (item.videoLink) {
      let url = item.videoLink;
      if (url.includes("watch?v=")) url = url.replace("watch?v=", "embed/").split("&")[0];
      if (url.includes("youtu.be/"))
        url = "https://www.youtube.com/embed/" + url.split("youtu.be/")[1].split("?")[0];

      result.push({
        ...base,
        type: "videoEmbed",
        embedUrl: url,
        id: `p-${podcast.id}-${i}-yt`,
      });
    }

    // 🔥 Video file (KEEP STRAPI_URL — backend format is still relative)
    if (item.videoFile?.url) {
      result.push({
        ...base,
        type: "videoFile",
        fileUrl: STRAPI_URL + item.videoFile.url,
        id: `p-${podcast.id}-${i}-vf`,
      });
    }
  });

  return result;
};


  const applySearch = (t, list) => {
    if (!t.trim()) return list;
    const term = t.toLowerCase();
    return list.filter(
      (x) =>
        x.title?.toLowerCase().includes(term) ||
        x.description?.toLowerCase().includes(term) ||
        x.guestName?.toLowerCase().includes(term) ||
        x.guestDesignation?.toLowerCase().includes(term)
    );
  };

  const openLightbox = (items, index) => setLightbox({ open: true, items, index });
  const closeLightbox = () => setLightbox({ open: false, items: [], index: 0 });

  const nextItem = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length,
    }));

  const prevItem = () =>
    setLightbox((prev) => ({
      ...prev,
      index: prev.index === 0 ? prev.items.length - 1 : prev.index - 1,
    }));

  const renderLightboxMedia = (item) =>
    item.type === "videoEmbed" ? (
      <iframe className="lightbox-media" src={item.embedUrl} allowFullScreen />
    ) : item.type === "videoFile" ? (
      <video className="lightbox-media" src={item.fileUrl} controls autoPlay />
    ) : (
      <img className="lightbox-media" src={item.src} alt={item.title} />
    );

  if (loading) return <p className="media-page">Loading podcasts...</p>;

  return (
    <div className="media-page">
      <header className="media-header">
        <h1>Podcasts</h1>
        <p>Talks, interviews & knowledge sessions</p>
      </header>

      {/* SEARCH */}
      <div className="event-search-bar">
        <input
          type="text"
          placeholder="Search guest / title / description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GROUP BY GUEST */}
      {podcasts.map((pod) => {
        const media = flattenPodcastToMedia(pod);
        const searched = applySearch(search, media);
        if (searched.length === 0) return null;

        const expanded = expandedGuests[pod.id];
        const visible = expanded ? searched : searched.slice(0, 15);

        return (
          <section key={pod.id} className="event-date-block">
            <motion.h2 className="event-date-heading" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              🎙️ {pod.guestName} — {pod.guestDesignation}
            </motion.h2>

            {/* GRID */}
            <div className="events-grid">
              {visible.map((item) => (
                <motion.div
                  key={item.id}
                  className="event-card"
                  onClick={() => openLightbox(searched, searched.indexOf(item))}
                  whileHover={{ scale: 1.02 }}
                >
                  {item.type === "image" && <img src={item.thumb} alt={item.title} className="event-thumb" />}
                  {item.type === "videoEmbed" && <div className="event-video-icon">▶</div>}
                  {item.type === "videoFile" && <div className="event-video-icon">🎬</div>}
                  <p className="event-card-title">{item.title}</p>
                </motion.div>
              ))}
            </div>

            {searched.length > 15 && (
              <div className="media-loadmore-wrapper">
                <button
                  className="media-loadmore"
                  onClick={() =>
                    setExpandedGuests((prev) => ({
                      ...prev,
                      [pod.id]: !prev[pod.id],
                    }))
                  }
                >
                  {expanded ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </section>
        );
      })}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevItem(); }}>‹</button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextItem(); }}>›</button>

          <div className="lightbox-media-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-info">
              <h2>{lightbox.items[lightbox.index].title}</h2>
              <p>
                {lightbox.items[lightbox.index].guestName} —{" "}
                {lightbox.items[lightbox.index].guestDesignation}
              </p>
            </div>

            {/* 🔥 MEDIA FIRST */}
            {renderLightboxMedia(lightbox.items[lightbox.index])}

            {/* 🔥 SHARE AFTER MEDIA */}
            {(() => {
              const item = lightbox.items[lightbox.index];
              const links = shareItem(item);
              return (
                <div className="lightbox-share">
                  <a href={links.whatsapp} target="_blank" rel="noreferrer" className="share-btn whatsapp">
                    WhatsApp
                  </a>
                  <a href={links.instagram} target="_blank" rel="noreferrer" className="share-btn instagram">
                    Instagram
                  </a>
                  <button
                    className="share-btn copy"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigator.clipboard.writeText(window.location.href);
                      alert("🔗 Link copied!");
                    }}
                  >
                    Copy Link
                  </button>
                </div>
              );
            })()}

            {lightbox.items[lightbox.index].description && (
              <div className="lightbox-description">
                <ReactMarkdown>
                  {lightbox.items[lightbox.index].description}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Podcasts;
