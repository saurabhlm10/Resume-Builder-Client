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
        <ProfileSummary />

        <WorkExperience />

        <Projects />
      </div>

      <Footer />

      {/* <Resume /> */}
    </div>
  );
};

export default Home;

// {profileSummary: 'Data Scientist at XYZ Company for one year, I poss…lutions has positively impacted project outcomes.', workExperience: {
//   title: "Data Scientist | XYZ Company | [Start Date] - Present",
//   description: [
//     "Spearheaded data-driven projects using Python, ML, and DL.",
//     "Developed Computer Vision algorithms, enhancing image processing efficiency.",
//     "Implemented NLP techniques to refine user interactions with systems.",
//     "Explored Generative AI capabilities, innovating in content creation.",
//   ],
// } ,
// projects: [
//   {
//     title: "Predictive Typing Tool",
//     description:
//       "Constructed an ML model to predict next-word suggestions, streamlining the typing experience for content writers.",
//   },
//   {
//     title: "Visual Storyteller",
//     description:
//       "Devised a model combining Computer Vision and Generative AI to convert images into descriptive stories.",
//   },
//   {
//     title: "AI Music Composer",
//     description:
//       "Leveraged Generative AI to create adaptive music compositions, producing 100+ unique tracks for indie game developers.",
//   },
// ]}
