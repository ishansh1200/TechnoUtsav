// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { CiLocationOn } from "react-icons/ci";
import { FaSquareInstagram} from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 mb-32 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ml-10 pl-10">
          <div className="flex flex-col gap-5 lg:gap-9 text-xl md:text-3xl"> {/* Increased text size */}
            <p className="flex items-center gap-3">
              <MdAlternateEmail
                className="bg-black bg-opacity-65 text-white p-2 rounded-full 
                hover:bg-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer"
                size={48} // Increased icon size
              />
              <span>{personalData.email}</span>
            </p>
            <p className="flex items-center gap-3">
              <IoMdCall
                className="bg-black bg-opacity-65 text-white p-2 rounded-full 
                hover:bg-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer"
                size={48} // Increased icon size
              />
              <span>{personalData.phone}</span>
            </p>
            <p className="flex items-center gap-3">
              <CiLocationOn
                className="bg-black bg-opacity-65 text-white p-2 rounded-full 
                hover:bg-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer"
                size={48} // Increased icon size
              />
              <span>{personalData.address}</span>
            </p>
          </div>
          <div className="mt-10 pt-5 flex translate-x-10 ml-10 pl-5">
            <Link target="_blank" href={personalData.facebook} 
            className="flex items-center gap-3 bg-black bg-opacity-65 text-white px-4 py-2 rounded-2xl
            hover:bg-gray-600 hover:scale-110 transition-all duration-300 cursor-pointer">
              <FaSquareInstagram size={48} />
              <span className="text-xl translate-x-">INNOVRITI</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;