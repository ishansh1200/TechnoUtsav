import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import EventCard from './EventCard';
import EventDetails from './EventDetails';
import { events } from '../data/events';


function Events() {
    return (
        <Router>
      <Routes>
        <Route path="/" element={
          
          <div className="min-h-screen w-[100%] bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900 text-white bg-black " >
            
            <div className="container mx-auto px-4 py-12">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-center mb-12 pb-10 m"
              >
                <h1 className="text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-200 mb-5">
                  Tech Events
                </h1>
                <p className="text-violet-300 text-lg mb-7">Discover the Future of Technology</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-36 lg:gap-y-36  gap-y-20 gap-x-5 sm:gap-x-1
                            px-15 sm:px-4  md:px-5 lg:px-20 -translate-x-13"
              >
                {events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <EventCard event={event} />
                    
                  </motion.div>
                ))}
              </motion.div>
            </div>
          
          </div>
        } />
        
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
    )
}

export default Events
