import HeroSection from './components/HeroSection';
import EventsGrid from './components/EventsGrid';
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <main>
      <HeroSection />
      <EventsGrid />
    </main>
  )
}

export default App