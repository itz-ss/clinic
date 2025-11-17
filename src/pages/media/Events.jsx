// -------------------------------------------------------
// EVENTS PAGE — FINAL PREMIUM VERSION
// Matches your Strapi JSON structure exactly
// Includes:
// ✔ Sorted newest first
// ✔ Show more after 10 items
// ✔ Premium grid layout (3/2/1 responsive)
// ✔ Same video styling as Educational Videos
// ✔ Markdown description
// ✔ YouTube embed fix
// -------------------------------------------------------

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchEvents } from "../../services/strapi";
import "../../styles/Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10); // show 10 initially

  // Fetch Events
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

  const loadMore = () => setVisibleCount((prev) => prev + 10);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  if (loading) return <p className="media-page">Loading events...</p>;

  return (
    <div className="media-page">
      <header className="media-header">
        <h1>Events</h1>
        <p>Awareness programs, workshops & public education sessions.</p>
      </header>

      <div className="events-grid">
        {events.slice(0, visibleCount).map((event) => (
          <motion.div
            key={event.id}
            className="event-card-unified"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Title (Date + Location) */}
            <h2 className="event-title-unified">
              {formatDate(event.Date)} – {event.location}
            </h2>

            {/* Internal event items */}
            {event.Events?.map((item) => {
              let embedUrl = null;
              if (item.videoLink) {
                const l = item.videoLink;
                if (l.includes("watch?v=")) {
                  embedUrl = l.replace("watch?v=", "embed/").split("&")[0];
                } else if (l.includes("youtu.be/")) {
                  embedUrl =
                    "https://www.youtube.com/embed/" +
                    l.split("youtu.be/")[1].split("?")[0];
                }
              }

              return (
                <div key={item.id} className="inner-event-content">
                  <h3 className="inner-event-title">{item.title}</h3>

                  {item.description && (
                    <div className="inner-event-description">
                      <ReactMarkdown>{item.description}</ReactMarkdown>
                    </div>
                  )}

                  {/* Video */}
                  {embedUrl && (
                    <div className="inner-event-video">
                      <iframe
                        src={embedUrl}
                        title={item.title}
                        frameBorder="0"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Post link */}
                  {item.postLink && (
                    <a
                      className="event-post-btn"
                      href={item.postLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Related Post
                    </a>
                  )}
                </div>
              );
            })}
          </motion.div>
        ))}
      </div>

      {/* Show More Button */}
      {events.length > visibleCount && (
        <div className="media-loadmore-wrapper">
          <button className="media-loadmore" onClick={loadMore}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Events;
