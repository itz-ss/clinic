// -------------------------------------------------------
// Educational Videos Page
// -------------------------------------------------------
// Includes:
// ✔ Fetch from Strapi
// ✔ Auto YouTube title if missing
// ✔ Dynamic category filter dropdown
// ✔ Sorting dropdown
// ✔ Group by category
// ✔ "Show More" after every 10 videos
// ✔ Responsive premium UI
// -------------------------------------------------------

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { fetchEducationalVideos } from "../../services/strapi";
import "../../styles/EducationalVideos.css";

const EducationalVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("latest");
  const [visibleCount, setVisibleCount] = useState(10);

  // Auto-fetch YouTube title if Strapi title missing
  const fetchYouTubeTitle = async (videoLink) => {
    try {
      const idMatch =
        videoLink.match(/v=([^&]+)/) || videoLink.match(/youtu\.be\/([^?]+)/);
      const id = idMatch?.[1];
      if (!id) return null;

      const api = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`;
      const res = await fetch(api);
      const json = await res.json();
      return json.title || null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const load = async () => {
      const data = await fetchEducationalVideos();
      const processed = await Promise.all(
        (data || []).map(async (v) => {
          let title = v.title;
          if (!title && v.videoLink) {
            const fetched = await fetchYouTubeTitle(v.videoLink);
            if (fetched) title = fetched;
          }
          return { ...v, title };
        })
      );
      setVideos(processed);
      setLoading(false);
    };
    load();
  }, []);

  const groupedByCategory = videos.reduce((acc, v) => {
    const cat = v.category || "Uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(v);
    return acc;
  }, {});

  const sortVideos = (arr) => {
    const sorted = [...arr];
    if (sortBy === "latest")
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (sortBy === "oldest")
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (sortBy === "asc") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "desc") sorted.sort((a, b) => b.title.localeCompare(a.title));
    return sorted;
  };

  const getStrapiFileUrl = (file) =>
    file?.url ? `http://localhost:1337${file.url}` : null;

  const loadMore = () => setVisibleCount((p) => p + 10);

  if (loading) return <p className="media-page">Loading videos...</p>;

  return (
    <div className="media-page">
      <header className="media-header">
        <h1>Educational Videos</h1>
        <p>Discover premium clinical awareness content — organized elegantly</p>
      </header>

      {/* Dropdowns */}
      <div className="media-dropdowns">
        <select
          className="media-select"
          value={selectedCategory || ""}
          onChange={(e) => {
            setSelectedCategory(e.target.value || null);
            setVisibleCount(10);
          }}
        >
          <option value="">All Categories</option>
          {Object.keys(groupedByCategory).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          className="media-select"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            setVisibleCount(10);
          }}
        >
          <option value="latest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="asc">Title A–Z</option>
          <option value="desc">Title Z–A</option>
        </select>
      </div>

      {/* Display grouped + sorted videos */}
      {Object.keys(groupedByCategory)
        .filter((cat) => !selectedCategory || selectedCategory === cat)
        .map((cat) => {
          const sortedVideos = sortVideos(groupedByCategory[cat]);

          return (
            <section key={cat} className="media-section">
              {!selectedCategory && <h2 className="media-section-title">{cat}</h2>}

              <div className="media-grid">
                {sortedVideos.slice(0, visibleCount).map((video) => {
                  const thumbnailUrl = getStrapiFileUrl(video.thumbnail);
                  const videoFileUrl = getStrapiFileUrl(video.videoFile);

                  // 🔥 Universal YouTube Link Converter (ALL formats supported)
                  let embedUrl = null;
                  if (video.videoLink) {
                    let link = video.videoLink.trim();
                    let videoId = null;

                    if (link.includes("watch?v=")) {
                      videoId = link.split("watch?v=")[1].split("&")[0];
                    } else if (link.includes("youtu.be/")) {
                      videoId = link.split("youtu.be/")[1].split("?")[0];
                    } else if (link.includes("shorts/")) {
                      videoId = link.split("shorts/")[1].split("?")[0];
                    } else if (link.includes("embed/")) {
                      videoId = link.split("embed/")[1].split("?")[0];
                    } else if (/^[a-zA-Z0-9_-]{11}$/.test(link)) {
                      videoId = link; // only ID
                    }

                    if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}`;
                  }

                  return (
                    <motion.article
                      key={video.id}
                      className="media-card"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {thumbnailUrl && (
                        <div className="media-thumb">
                          <img src={thumbnailUrl} alt={video.title} />
                        </div>
                      )}

                      <h3>{video.title || "Untitled Video"}</h3>

                      {video.description && (
                        <div className="media-description">
                          <ReactMarkdown>{video.description}</ReactMarkdown>
                        </div>
                      )}

                      <div className="media-actions">
                        {videoFileUrl ? (
                          <video controls className="media-video">
                            <source src={videoFileUrl} type="video/mp4" />
                          </video>
                        ) : embedUrl ? (
                          <div className="media-video youtube-embed">
                            <iframe src={embedUrl} title={video.title} allowFullScreen />
                          </div>
                        ) : (
                          <span>No playable media</span>
                        )}
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {sortedVideos.length > visibleCount && (
                <div className="media-loadmore-wrapper">
                  <button className="media-loadmore" onClick={loadMore}>
                    Show More
                  </button>
                </div>
              )}
            </section>
          );
        })}
    </div>
  );
};

export default EducationalVideos;
