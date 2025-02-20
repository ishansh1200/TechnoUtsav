"use client";
import Navbar from "@/components/Navbar";
import TextBox from "@/components/TextBox";
import Events from "@/components/Events";
import Sponsors from "@/components/Sponsers";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Balatro from "./Balatro";

export default function Home() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* Balatro Background */}
      <div className="fixed inset-0 z-0">
        <Balatro isRotate={false} mouseInteraction={true} pixelFilter={700} />
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full">
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full px-4 z-50 shadow-md">
          <Navbar />
        </div>

        {/* Main Content Sections */}
        <div
          id="home"
          className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
        >
          <TextBox />
        </div>

        <div
          className="w-full px-4 sm:px-8 flex items-center justify-center text-center"
          id="eventdetails"
        >
          <Events />
        </div>

        <div
          className="w-full px-4 sm:px-8 flex flex-col items-center justify-center"
          id="sponsors"
        >
          <Sponsors />
        </div>

        <Contact />

        <Footer />
      </div>
    </div>
  );
}
