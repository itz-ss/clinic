// src/components/SEO.jsx
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

function SEO({
  title,
  description,
  keywords,
  image = "/assets/images/og-image.jpg",
}) {

  const location = useLocation();

  // Automatically build canonical URL using your domain + current path
  const baseUrl = "https://your-domain.example"; // CHANGE this once you know the real domain
  const canonical = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>

      {/* ---------- Basic SEO Tags ---------- */}
      {title && (
        <title>{title}</title>
      )}
      {description && (
        <meta name="description" content={description} />
      )}
      {keywords && (
        <meta name="keywords" content={keywords} />
      )}
      <meta name="robots" content="index, follow" />


      {/* ---------- Canonical URL ---------- */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}


      {/* ---------- Open Graph / Social Media ---------- */}
      {title && (
        <meta property="og:title" content={title} />
      )}
      {description && (
        <meta property="og:description" content={description} />
      )}
      {canonical && (
        <meta property="og:url" content={canonical} />
      )}
      {image && (
        <meta property="og:image" content={image} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />


      {/* ---------- Twitter Cards ---------- */}
      {title && (
        <meta name="twitter:title" content={title} />
      )}
      {description && (
        <meta name="twitter:description" content={description} />
      )}
      {image && (
        <meta name="twitter:image" content={image} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
    
  );
}

export default SEO;
