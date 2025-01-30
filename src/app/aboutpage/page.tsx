import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-10">
      <div className="flex flex-wrap w-full max-w-5xl gap-6">
        {/* Event Name/ About event */}
        <div className="w-1/3 bg-red-400 text-black p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Event</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Prize pool */}
        <div className="w-1/2 bg-green-300 text-black p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold">Prizes</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        {/* Year */}
        <div className="w-1/4 bg-yellow-300 text-black p-6 rounded-xl shadow-md text-center flex items-center justify-center font-bold text-xl">
          2024
        </div>

        {/* Summary */}
        <div className="w-2/5 bg-white border border-black p-6 rounded-xl shadow-md ">
          <h2 className="text-2xl font-bold">Our Summary</h2>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>


      </div>
    </div>
  );
};

export default Page;
