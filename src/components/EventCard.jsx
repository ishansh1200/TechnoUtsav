import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const eventImages = {
  1: "/images/1.jpeg",
  2: "/images/2.jpeg",
  3: "/images/3.jpeg",
  4: "/images/4.jpeg",
};

const EventCard = ({ event }) => {
  const eventImage = eventImages[event.img];

  return (
    <motion.div
      className="relative flex w-70 lg:w-[45vh] h-[60vh] flex-col rounded-3xl bg-gray-500 opacity-85
      text-white transition-all duration-300 "
      whileHover={{
        boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        scale: 1.1,
      }}
    >
      {/* Image Section */}
      <motion.div
        className="relative mx-4 mt-6 h-40 bg-white flex justify-center items-center rounded-xl shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={eventImage}
          alt={event.title}
          className="w-full h-full object-cover rounded-xl"
          width={320}a
          height={160}
        />
      </motion.div>

      {/* Text Content */}
      <motion.div className="p-6">
        <motion.h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {event.title}
        </motion.h5>
        <p className="text-base font-light">{event.shortDescription}</p>
      </motion.div>

      {/* Action Section */}
      <div className="mb-5 mt-10 flex justify-center items-center">
        {/* Read More button using Next.js Link */}
        <Link href="/aboutpage" passHref legacyBehavior>
          <StyledButton target="_blank" rel="noopener noreferrer" className="mr-10">
            Read More
          </StyledButton>
        </Link>

        <span className="text-sm px-4 py-2 border-2 border-black rounded-lg text-black">
          {event.date}
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;

const StyledButton = styled.a`
  display: inline-block;
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
  text-decoration: none;

  &:hover {
    background-color: gray;
  }
`;
