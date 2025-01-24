import { Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import EventsGrid from './components/EventsGrid';
import EventRegistration from './pages/EventRegistration';
import { SpeedInsights } from "@vercel/speed-insights/vite"; // Correct Vite import

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <main>
          <HeroSection />
          <EventsGrid />
          <SpeedInsights />
        </main>
      }/>
      <Route path="/events/:eventId" element={<EventRegistration />} />
    </Routes>
  );
}

export default App;