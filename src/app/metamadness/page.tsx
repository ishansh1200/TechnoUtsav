  "use client"
  
  import Image from "next/image"
  import { motion } from "framer-motion"
  import { Orbitron, Audiowide } from "next/font/google"
  import bg11 from "./backgrounds/bg11.jpg"
  import bg20 from "./backgrounds/bg20.jpg"
  import Link from "next/link"

  const orbitron = Orbitron({ subsets: ["latin"], weight: "700" })
  const audiowide = Audiowide({ subsets: ["latin"], weight: "400" })

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const Page = () => {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative flex flex-col lg:flex-row min-h-screen p-4 lg:p-8 pt-6 lg:pt-10 text-gray-200 overflow-hidden"
      >
        {/* Enhanced Background with Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-35 z-0" />
          <Image 
            src={bg11 || "/placeholder.svg"} 
            alt="Background" 
            layout="fill" 
            objectFit="cover" 
            quality={100}
            className="scale-100 lg:scale-105 transition-transform duration-10000 ease-in-out -z-10"
          />
        </div>

        {/* Left Section */}
        <motion.div className="flex-1 lg:ml-8 lg:mr-4 mb-8 lg:mb-0 overflow-y-auto" variants={fadeIn}>
          {/* First Box - Enhanced with Glassmorphism */}
          <motion.div 
            className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 p-6 lg:p-8 rounded-xl mb-8 backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all"
            variants={fadeIn}
            whileHover={{ scale: 1.005 }}
          >
            <h1 className={`text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent ${orbitron.className}`}>
              META MADNESS
            </h1>
            <div className="text-lg lg:text-xl text-cyan-100 space-y-5">
              <p className="leading-relaxed">
                Get ready to unleash your inner gamer! This exciting online gaming competition invites all students to
                compete in a series of thrilling matches across a diverse range of popular titles.
              </p>
              <ul className="space-y-4">
                {[
                  "Compete in games like Call of Duty, Clash Royale, and Stumble Guys",
                  "Experience fast-paced action, strategic depth, and chaotic fun",
                  "Participate in multiple rounds leading up to an exciting final showdown",
                  "Engage in additional activities like casual tournaments, a cosplay contest, and live commentary",
                  "Foster a sense of community and sportsmanship among gamers",
                  "Connect with fellow students over a shared passion for gaming"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-3"
                    variants={itemVariants}
                  >
                    <span className="text-cyan-400 mt-1">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Second Box - Enhanced */}
          <motion.div 
            className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 p-6 lg:p-8 rounded-xl backdrop-blur-lg border border-cyan-400/30 hover:border-cyan-400/50 transition-all"
            variants={fadeIn}
            whileHover={{ scale: 1.005 }}
          >
            <h1 className={`text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent ${orbitron.className}`}>
              ADVANTAGES OF PARTICIPATING
            </h1>
            <ul className="space-y-4 text-cyan-100">
              {[
                "Showcase your gaming skills in a competitive environment",
                "Compete for prizes and recognition within the college gaming community",
                "Meet and network with like-minded gamers",
                "Experience the thrill of live competitions and esports-style events",
                "Enjoy additional activities like cosplay contests and casual gaming rounds"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <span className="text-cyan-400 mt-1">▹</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Section - Enhanced */}
        <motion.div
          className="w-full lg:w-[35%] bg-gradient-to-br from-cyan-900/30 to-cyan-800/10 p-6 lg:p-8 rounded-xl lg:mr-8 h-auto lg:h-[85vh] border-2 border-cyan-400/30 backdrop-blur-lg mt-5 overflow-y-auto hover:border-cyan-400/50 transition-all"
          variants={fadeIn}
          whileHover={{ scale: 1.005 }}
        >
          {/* Top Image Section */}
          <div className="h-48 lg:h-[35%] relative mb-8 rounded-xl overflow-hidden group">
            <Image
              src={bg20 || "/placeholder.svg"}
              alt="Top Background"
              layout="fill"
              objectFit="cover"
              className="rounded-xl transform transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <h1 className={`text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-rose-600 bg-clip-text text-transparent ${audiowide.className}`}>
              EVENT DETAILS
            </h1>

            <div className="space-y-6">
              <div className="border-b border-cyan-400/30 pb-6">
                <h2 className={`text-xl font-bold text-cyan-300 mb-2 ${orbitron.className}`}>Total Prize Pool</h2>
                <h3 className={`text-2xl font-bold text-amber-400 ${orbitron.className}`}>₹30,000</h3>
              </div>

              <div className="border-b border-cyan-400/30 pb-6">
                <h2 className={`text-xl font-bold text-cyan-300 mb-2 ${orbitron.className}`}>Venue</h2>
                <h3 className={`text-xl font-bold text-amber-400 ${orbitron.className}`}>VIPS-TC Rooms 203, 403</h3>
              </div>

              <div className="pb-6">
                <h2 className={`text-xl font-bold text-cyan-300 mb-2 ${orbitron.className}`}>Date and Time</h2>
                <h3 className={`text-xl font-bold text-amber-400 ${orbitron.className}`}>27th Feb 2025</h3>
                <h3 className={`text-xl font-bold text-amber-400 ${orbitron.className}`}>10:00 AM to 5:00 PM</h3>
              </div>
            </div>

            {/* Registration Buttons - Enhanced */}
            <motion.div 
              className="grid grid-cols-1 gap-4"
              variants={itemVariants}
            >
              {[
                { href: 'https://unstop.com/p/gaming-arena-call-of-duty-vivekananda-institute-of-professional-studies-vips-delhi-1393044', text: 'Call of Duty' },
                { href: 'https://unstop.com/p/gaming-arena-clash-royal-vivekananda-institute-of-professional-studies-vips-delhi-1393069', text: 'Clash Royale' },
                { href: 'https://unstop.com/p/gaming-arena-stumble-guys-vivekananda-institute-of-professional-studies-vips-delhi-1393081', text: 'Stumble Guys' },
                { href: 'https://docs.google.com/document/d/1eiQnKSs-tDmOF4QvVbNSljQ4hpbUxPTgonxKvxJaWtU/edit?usp=sharing', text: 'Event Details' }
              ].map((link, i) => (
                <Link key={i} href={link.href} passHref>
                  <motion.button 
                    whileHover={{ y: -2 }}
                    className="w-full bg-cyan-700/80 text-white py-3 px-6 rounded-xl text-lg font-semibold text-center hover:bg-cyan-600 transition-all border border-cyan-400/30 hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20"
                  >
                    {link.text}
                  </motion.button>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Custom Scrollbar Styles */}
        <style jsx global>{`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #0a1a1f;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #00ffff, #0066ff);
            border-radius: 10px;
            border: 2px solid #0a1a1f;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #00cccc, #0055cc);
          }
          @media (max-width: 768px) {
            ::-webkit-scrollbar {
              width: 4px;
            }
          }
        `}</style>
      </motion.div>
    )
  }

  export default Page