// -------------------------------------------------------
// EVENTS PAGE — PER-DATE GRID (NO FOLDERS) + LIGHTBOX
// -------------------------------------------------------

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchEvents } from "../../services/strapi";
import { STRAPI_URL } from "../../config";
import "../../styles/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [expandedDates, setExpandedDates] = useState({});

  // Lightbox
  const [lightbox, setLightbox] = useState({
    open: false,
    items: [],
    index: 0,
  });

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const load = async () => {
      const data = await fetchEvents();
      const sorted = [...(data || [])].sort(
        (a, b) => new Date(b.Date) - new Date(a.Date)
      );
      setEvents(sorted);
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
  }, [lightbox]);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

 const flattenEventToMedia = (event) => {
  const baseItems = event.Events || [];
  const result = [];

  baseItems.forEach((item) => {
    const baseMeta = {
      parentDate: event.Date,
      parentLocation: event.location,
      title: item.title,
      description: item.description,
    };

    // 🔥 Thumbnail (NO STRAPI_URL prefix — Cloudinary has full URL)
    if (item.Thumbnail?.url) {
      result.push({
        ...baseMeta,
        type: "image",
        src: item.Thumbnail.formats?.medium?.url || item.Thumbnail.url,
        thumb: item.Thumbnail.formats?.small?.url || item.Thumbnail.url,
        id: `ev-${event.id}-${item.id}-thumb`,
      });
    }

    // 🔥 Gallery (NO STRAPI_URL prefix)
    if (Array.isArray(item.gallery)) {
      item.gallery.forEach((img, gIndex) => {
        result.push({
          ...baseMeta,
          type: "image",
          src:
            img.formats?.large?.url ||
            img.formats?.medium?.url ||
            img.url,
          thumb: img.formats?.thumbnail?.url || img.url,
          id: `ev-${event.id}-${item.id}-gal-${gIndex}`,
        });
      });
    }

    // 🔥 YouTube embed fix (same as before)
    if (item.videoLink) {
      let url = item.videoLink;
      if (url.includes("watch?v=")) {
        url = url.replace("watch?v=", "embed/").split("&")[0];
      } else if (url.includes("youtu.be/")) {
        url =
          "https://www.youtube.com/embed/" +
          url.split("youtu.be/")[1].split("?")[0];
      }

      result.push({
        ...baseMeta,
        type: "videoEmbed",
        embedUrl: url,
        id: `ev-${event.id}-${item.id}-yt`,
      });
    }

    // 🔥 Video File (KEEP STRAPI_URL prefix)
    if (item.videoFile?.url) {
      result.push({
        ...baseMeta,
        type: "videoFile",
        fileUrl: STRAPI_URL + item.videoFile.url,
        id: `ev-${event.id}-${item.id}-vf`,
      });
    }
  });

  return result;
};


  const applySearch = (term, items) => {
    if (!term.trim()) return items;
    const t = term.toLowerCase();
    return items.filter((m) => {
      const title = m.title?.toLowerCase() || "";
      const desc = m.description?.toLowerCase() || "";
      const loc = m.parentLocation?.toLowerCase() || "";
      const dateStr = formatDate(m.parentDate).toLowerCase();
      return (
        title.includes(t) ||
        desc.includes(t) ||
        loc.includes(t) ||
        dateStr.includes(t)
      );
    });
  };

  const openLightbox = (items, index) => {
    setLightbox({ open: true, items, index });
  };

  const closeLightbox = () =>
    setLightbox({ open: false, items: [], index: 0 });

  const nextItem = () =>
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length,
    }));

  const prevItem = () =>
    setLightbox((prev) => ({
      ...prev,
      index:
        prev.index === 0 ? prev.items.length - 1 : prev.index - 1,
    }));

  const renderLightboxMedia = (item) => {
    if (!item) return null;

    if (item.type === "videoEmbed") {
      return (
        <iframe
          className="lightbox-media"
          src={item.embedUrl}
          title={item.title || "Video"}
          allowFullScreen
        />
      );
    }

    if (item.type === "videoFile") {
      return (
        <video
          className="lightbox-media"
          src={item.fileUrl}
          controls
          autoPlay
        />
      );
    }

    if (item.type === "image") {
      return (
        <img
          className="lightbox-media"
          src={item.src}
          alt={item.title || ""}
        />
      );
    }

    return null;
  };

  if (loading) return <p className="media-page">Loading events...</p>;

  return (
    <div className="media-page">
      <header className="media-header">
        <h1>Events</h1>
        <p>Awareness programs, workshops & public education sessions.</p>
      </header>

      <div className="event-search-bar">
        <input
          type="text"
          placeholder="Search by title, description, location or date..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {events.map((event) => {
        const mediaItems = flattenEventToMedia(event);
        const searched = applySearch(search, mediaItems);
        if (searched.length === 0) return null;

        const expanded = expandedDates[event.id];
        const visible = expanded ? searched : searched.slice(0, 15);

        return (
          <section key={event.id} className="event-date-block">
            <motion.h2
              className="event-date-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              📅 {formatDate(event.Date)} — {event.location}
            </motion.h2>

            {/* GRID VIEW — EACH ITEM IS A SEPARATE CARD */}
            <div className="events-grid">
              {visible.map((item) => (
                <motion.div
                  key={item.id}
                  className="event-card"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() =>
                    openLightbox(searched, searched.indexOf(item))
                  }
                >
                  {item.type === "image" && (
                    <img
                      src={item.src}       // 🔥 now using high-resolution instead of thumbnail
                      alt={item.title || ""}
                      className="event-thumb"
                      loading="lazy"
                    />
                  )}

                  {/* 🔥 UPDATED — Videos now play inside cards */}
                  {item.type === "videoEmbed" && (
                    <div className="event-video-wrapper">
                      <iframe
                        src={item.embedUrl}
                        className="event-video"
                        title={item.title}
                        allowFullScreen
                      />
                    </div>
                  )}

                  {item.type === "videoFile" && (
                    <video
                      className="event-video"
                      src={item.fileUrl}
                      controls
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {searched.length > 15 && (
              <div className="media-loadmore-wrapper">
                <button
                  className="media-loadmore"
                  onClick={() =>
                    setExpandedDates((prev) => ({
                      ...prev,
                      [event.id]: !prev[event.id],
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

      {lightbox.open && lightbox.items[lightbox.index] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            ✕
          </button>

          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prevItem();
            }}
          >
            ‹
          </button>
          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              nextItem();
            }}
          >
            ›
          </button>

          <div
            className="lightbox-media-wrapper"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) =>
              (touchStartX.current = e.changedTouches[0].screenX)
            }
            onTouchEnd={(e) => {
              touchEndX.current = e.changedTouches[0].screenX;
              const diff = touchStartX.current - touchEndX.current;
              if (Math.abs(diff) > 60) {
                diff > 0 ? nextItem() : prevItem();
              }
            }}
          >
            <div className="lightbox-info">
              <h2>{lightbox.items[lightbox.index].title}</h2>
              <p>
                {formatDate(lightbox.items[lightbox.index].parentDate)} •{" "}
                {lightbox.items[lightbox.index].parentLocation}
              </p>
            </div>

            {renderLightboxMedia(lightbox.items[lightbox.index])}

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

export default Events;
