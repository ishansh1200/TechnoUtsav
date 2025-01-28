import Image from "next/image";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import ShapeBlur from "./ShapeBlur";

// Map the `img` keys to the image paths
const eventImages = {
  1: "/images/1.jpeg",
  2: "/images/2.jpeg",
  3: "/images/3.jpeg",
  4: "/images/4.jpeg",
};

const EventCard = ({ event }) => {
  const eventImage = eventImages[event.img]; // Use `event.img` to select the correct image

  return (
    <motion.div
      className="relative flex w-80 lg:w-[50vh] h-[55vh] flex-col rounded-xl bg-gray-500 opacity-85 text-white transition-all duration-300"
      whileHover={{
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        scale: 1.05,
      }}
    >
      {/* Image Section */}
      <motion.div
        className="relative mx-4 -mt-6 h-40 bg-white flex justify-center items-center rounded-xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={eventImage}
          alt={event.title}
          className="w-full h-full object-cover rounded-xl"
          width={320} // Replace with actual dimensions
          height={160} // Replace with actual dimensions
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        className="p-6"
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <motion.h5
          className="mb-2 text-xl font-semibold text-blue-gray-900"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {event.title}
        </motion.h5>
        <p className="text-base font-light text-inherit">{event.shortDescription}</p>
      </motion.div>

      {/* Action Section */}
      <div className="mb-5 mt-10 flex justify-center items-center">
        <Link to={`/event/${event.id}`} className="group mr-4">
          <StyledButton>Read More</StyledButton>
        </Link>

        <span className="text-sm px-4 py-2 border-2 border-black rounded-lg text-black">
          {event.date}
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
  }
`;
