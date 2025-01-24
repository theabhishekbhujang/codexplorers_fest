import { motion } from 'framer-motion';
import { useState } from 'react';

const events = [
  { 
    id: 1,
    name: 'Code Crusade',
    category: 'coding',
    description: 'coding competition',
    type: ['PG', 'UG']
  },
  {
    id: 2,
    name: 'Pixel Perfect',
    category: 'web-design',
    description: 'Web design showdown',
    type: ['PG', 'UG']
  },
  {
    id: 3,
    name: 'Tech Trivia',
    category: 'quiz',
    description: 'IT quiz competition',
    type: ['PG', 'UG']
  },
  {
    id: 4,
    name: 'Startup Summit',
    category: 'tech-tank',
    description: 'Tech pitch competition',
    type: ['PG', 'UG']
  },
  {
    id: 5,
    name: 'Frame Focus',
    category: 'photography',
    description: 'photography contest',
    type: ['PG', 'UG']
  }
  // Add more events as needed
];

const EventsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <section className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          Event Arena
        </h2>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['all', 'coding', 'web-design', 'quiz', 'tech-tank', 'photography'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === cat
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat === 'all' ? 'All' : cat.replace('-', ' ').toUpperCase()}
            </button>
          ))}
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 rounded-xl p-6 cursor-pointer relative overflow-hidden"
              onClick={() => window.location.href = `/register/${event.id}`} // Will update with proper routing later
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGrid;
