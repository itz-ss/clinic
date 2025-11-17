const BASE_URL = "http://localhost:1337/api";

/**
 * Generic fetch function
 * @param {string} endpoint - e.g. "events", "educational-videos"
 */
async function fetchFromStrapi(endpoint) {
  const res = await fetch(`${BASE_URL}/${endpoint}?populate=*`);
  const json = await res.json();
  return json.data; // returns an array
}

/** INDIVIDUAL FETCHERS */
export function fetchEducationalVideos() {
  return fetchFromStrapi("educational-videos");
}

export function fetchEvents() {
  return fetchFromStrapi("events");
}

export function fetchInTheNews() {
  return fetchFromStrapi("in-the-news");
}

export function fetchPodcasts() {
  return fetchFromStrapi("podcasts");
}

export function fetchTestimonials() {
  return fetchFromStrapi("testimonials");
}



// http://localhost:1337/api/educational-videos

// http://localhost:1337/api/events

// http://localhost:1337/api/medias

// http://localhost:1337/api/podcasts
// http://localhost:1337/api/testimonials