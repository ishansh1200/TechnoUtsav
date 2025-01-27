import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { events } from '../data/events';

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 text-white p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link to="/" className="text-violet-300 hover:text-violet-200 mb-8 inline-flex items-center group">
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="ml-2">Back to Events</span>
          </Link>
        </motion.div>
        
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-violet-300 mb-6"
        >
          {event.title}
        </motion.h1>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-violet-500/30"
        >
          <div className="mb-6">
            <p className="text-lg text-gray-300">{event.fullDescription}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-lg bg-violet-900/20 border border-violet-500/30"
            >
              <span className="text-violet-300">Date:</span> {event.date}
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-lg bg-violet-900/20 border border-violet-500/30"
            >
              <span className="text-violet-300">Location:</span> {event.location}
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-lg bg-violet-900/20 border border-violet-500/30"
            >
              <span className="text-violet-300">Duration:</span> {event.duration}
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-3 rounded-lg bg-violet-900/20 border border-violet-500/30"
            >
              <span className="text-violet-300">Category:</span> {event.category}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventDetails;