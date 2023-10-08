'use client'

// context/ResumeContext.js

import React, { createContext, useState, useContext } from 'react';

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

  return (
    <ResumeContext.Provider value={{ resume, setResume }}>
      {children}
    </ResumeContext.Provider>
  );
};
