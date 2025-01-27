import e1 from '../img/e1.jpeg';
import e2 from '../img/e2.jpeg';
import e3 from '../img/e3.jpeg';
import e4 from '../img/e4.jpeg';
export const events = [
    {
      id: 1,
      title: "Meta Madness",
      shortDescription: "lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum",
      fullDescription: "lorem ipsum ",
      date: "April 15, 2024",
      location: "Tech Hub Center",
      duration: "8 hours",
      category: "Artificial Intelligence",
      img: e1,
    },
    {
      id: 2,
      title: "Innovate X",
      shortDescription: "48-hour coding challenge to build innovative solutions",
      fullDescription: "Put your coding skills to the test in this intensive hackathon. Form teams, tackle real-world problems, and create working prototypes. Prizes worth $10,000 up for grabs!",
      date: "May 1-3, 2024",
      location: "Digital Innovation Lab",
      duration: "48 hours",
      category: "Programming",
      img: e2,
    },
    {
      id: 3,
      title: "Blindfold Bytes",
      shortDescription: "Understanding the future of decentralized technology",
      fullDescription: "Deep dive into blockchain technology, smart contracts, and Web3 development. Learn about cryptocurrency, NFTs, and building decentralized applications.",
      date: "June 10, 2024",
      location: "Crypto Conference Center",
      duration: "6 hours",
      category: "Blockchain",
      img: e3,
    },
    {
      id: 4,
      title: "Campus Quest",
      shortDescription: "Master the art of ethical hacking and security",
      fullDescription: "Learn about penetration testing, network security, and cyber defense strategies. Hands-on experience with security tools and real-world scenarios.",
      date: "July 5, 2024",
      location: "Security Operations Center",
      duration: "12 hours",
      category: "Security",
      img: e4,
    },
    {
      id: 5,
      title: "Crack the Code",
      shortDescription: "Navigate the world of cloud technologies",
      fullDescription: "Comprehensive overview of AWS, Azure, and Google Cloud. Learn about cloud architecture, deployment strategies, and best practices for cloud migration.",
      date: "Aug 20, 2024",
      location: "Cloud Tech Center",
      duration: "10 hours",
      category: "Cloud Computing",
      img:e1,
      },
    {
      id: 6,
      title: "No Bug Zone",
      shortDescription: "Connecting the physical and digital worlds",
      fullDescription: "Explore the Internet of Things ecosystem. Learn about sensors, embedded systems, and building connected devices. Includes practical demonstrations and project showcase.",
      date: "Sep 15, 2024",
      location: "Smart Systems Lab",
      duration: "8 hours",
      category: "IoT",
      img:e2,
    },
    {
      id: 7,
      title: "Drone Racing",
      shortDescription: "Streamline your development operations",
      fullDescription: "Master the tools and practices of modern DevOps. Cover CI/CD pipelines, container orchestration, and infrastructure as code. Hands-on experience with Docker and Kubernetes.",
      date: "Oct 1, 2024",
      location: "DevOps Training Center",
      duration: "16 hours",
      category: "DevOps",
      img:e3,
    },
    {
      id: 8,
      title: "MechaSoccer",
      shortDescription: "Unlocking insights through data analytics",
      fullDescription: "Learn about big data analytics, statistical modeling, and data visualization. Practical sessions on Python, R, and popular data science tools.",
      date: "Nov 10, 2024",
      location: "Data Analytics Hub",
      duration: "14 hours",
      category: "Data Science",
      img:e4,
    },
    {
      id: 9,
      title: "Router Rush",
      shortDescription: "Experience the future of immersive technology",
      fullDescription: "Explore augmented and virtual reality technologies. Learn about 3D modeling, spatial computing, and creating immersive experiences. Try out the latest AR/VR hardware.",
      date: "Dec 5, 2024",
      location: "Virtual Reality Center",
      duration: "6 hours",
      category: "AR/VR",
      img:e1,
    }
  ];



{/*<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 25px rgba(139, 92, 246, 0.3)"
      }}
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }}
      className=" bg-gradient-to-br from-gray-900 via-violet-900 to-gray-900 rounded-lg overflow-hidden border border-violet-500/30 backdrop-blur-sm"
    >
      
      <div className="sm:h-[13rem]  lg:h-[15rem] ">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="absolute inset-0 bg-violet-600/5"
        />
        <h3 className="text-xl font-bold text-violet-300 mb-2 relative text-center mt-3 py-4">{event.title}</h3>
        <p className="text-gray-300 mb-4 relative mx-6">{event.shortDescription}</p>
        <div className="flex items-center justify-between relative mb-4 ">
          <span className="text-sm text-violet-200 bg-violet-900/50 px-4 rounded-full mx-6 py-2">
            {event.date}
          </span>
          <Link
            to={`/event/${event.id}`}
            className="pl-4  py-2 bg-violet-600 text-white rounded-full hover:bg-violet-500 transition-all duration-300 hover:px-6 flex items-center group mx-6"
          >
            <StyledWrapper>
              <button>
            Read More
            </button>
            </StyledWrapper>
            <motion.span
              className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              →
            </motion.span>
            
          </Link>
        </div>
       
        <motion.div
          className="absolute inset-0 border-2 border-violet-500/20 rounded-lg"
          initial={false}
          whileHover={{ scale: 1.05 }}
        />
      </div>
       
    </motion.div>
    */}