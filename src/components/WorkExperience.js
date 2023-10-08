// components/WorkExperience.js

import { useState } from "react";
import axiosInstance from "@/axios";
import { useResume } from "@/contexts/ResumeContext";

const WorkExperience = () => {
  const { resume, setResume } = useResume();

  const [experience, setExperience] = useState("");
  const [experienceChoices, setExperienceChoices] = useState([]);

  const handleExperienceSubmit = async () => {
    try {
      const response = await axiosInstance.get("/getWorkExperience");

      setExperienceChoices(response.data.outputs);
    } catch (error) {
      console.log(error);
    }
  };

  console.log();
  console.log(resume);


  return (
    <div className="mb-8 p-4 bg-gradient-to-tr from-green-200 to-yellow-200 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold text-gray-800 border-b-2 border-yellow-400 pb-2">
        Professional Experience
      </h2>
      <div className="mt-4">
        <label
          className="block text-sm font-medium text-green-700 mb-2"
          htmlFor="experience"
        >
          Your Experience
        </label>
        <textarea
          id="experience"
          className="w-full p-3 mb-4 border-2 border-green-400 rounded-md focus:outline-none focus:border-teal-500 resize-y bg-white"
          rows="5"
          placeholder="Enter your professional experience..."
          onChange={(e) => setExperience(e.target.value)}
        ></textarea>
      </div>
      <button
        className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 focus:outline-none focus:bg-teal-800 active:bg-teal-900"
        onClick={handleExperienceSubmit}
      >
        Submit
      </button>
      <div className="mt-4 space-y-4">
        {experienceChoices.map((choice, idx) => (
          <div key={idx} className="p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{choice.title}</h3>
            <ul className="pl-5 list-disc">
              {choice.description.map((desc, descIdx) => (
                <li key={descIdx}>{desc}</li>
              ))}
            </ul>
            <div className="mt-2">
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() =>
                  setResume((prevState) => ({
                    ...prevState,
                    workExperience: choice,
                  }))
                }
              >
                Use
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
