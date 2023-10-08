"use client";

// context/ResumeContext.js

import React, { createContext, useState, useContext } from "react";

const ResumeContext = createContext();

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [resume, setResume] = useState({
    profileSummary: "",
    workExperience: "",
    projects: []
  });

  // const [resume, setResume] = useState({
  //   profileSummary:
  //     "Data Scientist at XYZ Company for one year, I poss…lutions has positively impacted project outcomes.",
  //   workExperience: {
  //     title: "Data Scientist | XYZ Company | [Start Date] - Present",
  //     description: [
  //       "Spearheaded data-driven projects using Python, ML, and DL.",
  //       "Developed Computer Vision algorithms, enhancing image processing efficiency.",
  //       "Implemented NLP techniques to refine user interactions with systems.",
  //       "Explored Generative AI capabilities, innovating in content creation.",
  //     ],
  //   },
  //   projects: [
  //     {
  //       title: "Predictive Typing Tool",
  //       description:
  //         "Constructed an ML model to predict next-word suggestions, streamlining the typing experience for content writers.",
  //     },
  //     {
  //       title: "Visual Storyteller",
  //       description:
  //         "Devised a model combining Computer Vision and Generative AI to convert images into descriptive stories.",
  //     },
  //     {
  //       title: "AI Music Composer",
  //       description:
  //         "Leveraged Generative AI to create adaptive music compositions, producing 100+ unique tracks for indie game developers.",
  //     },
  //   ],
  // });
  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};
