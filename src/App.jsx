import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/scrollTop";

// Treatment Sub-Pages
import MinimallyInvasive from "./pages/treatments/MinimallyInvasive";
import Endoscopic from "./pages/treatments/Endoscopic";
import Scoliosis from "./pages/treatments/Scoliosis";
import Cervical from "./pages/treatments/Cervical";

// Media Sub-Pages
import InTheNews from "./pages/media/inTheNews";
import Podcast from "./pages/media/Podcast";
import EducationalVideos from "./pages/media/EducationalVideos";
import Events from "./pages/media/Events";
import Testimonials from "./pages/media/Testimonials";

// Data for services
import services from "./data/services";

// appointment form page
import AppointmentForm from "./components/AppointmentForm";
function App() {

  // For debugging: log imported components to verify correct imports
   /*console.log({
    Layout,
    Home,
    About,
    Achievements,
    Media,
    Contact,
    MinimallyInvasive,
    Endoscopic,
    Scoliosis,
    Cervical,
  }); */ 

  const treatmentComponents = {
  MinimallyInvasive,
  Endoscopic,
  Scoliosis,
  Cervical,
};

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Shared layout for all pages */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="contact" element={<Contact />} />

          {/* Treatment Sub-Pages */}

          {Object.entries(services).map(([key, service]) => {
            const Component = treatmentComponents[service.component];
            return (
              <Route
                key={key}
                path={`treatments/${service.slug}`}
                element={<Component />}
              />
            );
          })}

          {/* Media Sub-Pages */}
          <Route path="media/in-the-news" element={<InTheNews />} />
          <Route path="media/podcasts" element={<Podcast />} />
          <Route path="media/educational-videos" element={<EducationalVideos />} />
          <Route path="media/events" element={<Events />} />
          <Route path="media/testimonials" element={<Testimonials />} />

          {/* Appointment Form Page */}
          <Route path="appointment" element={<AppointmentForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;