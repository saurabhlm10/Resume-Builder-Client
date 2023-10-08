"use client";

import { useState } from "react";
import ProfileSummary from "../components/ProfileSummary";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Resume from "@/components/Resume";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />

      <div className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-wrap -mx-4">  {/* Flex container */}
          
          {/* Left column for input forms */}
          <div className="w-full lg:w-1/2 px-4">
            <ProfileSummary />
            <WorkExperience />
            <Projects />
          </div>
          
          {/* Right column for the real-time Resume preview */}
          <div className="w-full lg:w-1/2 px-4 relative">
            <div className="sticky top-6 h-[calc(100vh-6rem)] overflow-auto"> {/* Add these classes */}
              <Resume />
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
