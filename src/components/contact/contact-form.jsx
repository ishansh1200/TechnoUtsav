"use client";
// @flow strict
import {isValidEmail} from "@/utils/check-email"
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <p className="font-orbitron font-medium mb-8 text-[#16f2b3] text-2xl lg:text-3xl uppercase">
        Contact US
      </p>
      <div className="max-w-3xl w-full text-white rounded-lg border border-[#464c6a] p-5 lg:p-8 bg-black bg-opacity-75 ml-10">
        <p className="text-base lg:text-lg text-[#d3d8e8]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-lg lg:text-xl">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-lg"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg lg:text-xl">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-lg"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-base text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-lg lg:text-xl">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-lg border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-4 py-3 text-lg"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="5"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-4 mt-4">
            {error.required && <p className="text-base text-red-400">
              All fields are required!
            </p>}
            <button
              className="flex items-center gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-8 md:px-14 py-3 md:py-4 text-center text-sm md:text-base font-semibold uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message
                  <TbMailForward size={24} />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;