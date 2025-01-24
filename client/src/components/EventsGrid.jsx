import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Moved to top with other imports

const events = [
  { 
    id: 'code-crusade', // Changed to string ID
    name: 'Code Crusade',
    category: 'coding',
    description: 'coding competition',
    type: ['PG', 'UG']
  },
  {
    id: 'pixel-perfect', // Changed to string ID
    name: 'Pixel Perfect',
    category: 'web-design',
    description: 'Web design showdown',
    type: ['PG', 'UG']
  },
  // ... rest of events with string IDs
];

const EventsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* ... existing filter buttons ... */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Link 
              key={event.id}
              to={`/events/${event.id}`} // Proper routing
              className="block" // Ensure Link takes full space
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-800 rounded-xl p-6 cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 flex gap-2">
                  {event.type.map((t) => (
                    <span 
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
                <p className="text-gray-400">{event.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;