// components/Projects.js
import { useState } from "react";
import axiosInstance from "@/axios";
import { useResume } from "@/contexts/ResumeContext";

const Projects = () => {
  const { resume, setResume } = useResume();

  const [projectDescription, setProjectDescription] = useState(""); // For user to type in a custom project
  const [projectChoices, setProjectChoices] = useState([]);

  const handleProjectsSubmit = async () => {
    try {
      const response = await axiosInstance.get("/getProjects");

      setProjectChoices(response.data.outputs);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(resume)

  return (
    <div className="mb-8 p-4 bg-gradient-to-tr from-red-200 to-pink-200 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold text-gray-800 border-b-2 border-pink-400 pb-2">
        Projects
      </h2>
      <div className="mt-4">
        <label
          className="block text-sm font-medium text-red-700 mb-2"
          htmlFor="project"
        >
          Describe a New Project
        </label>
        <textarea
          id="project"
          className="w-full p-3 mb-4 border-2 border-red-400 rounded-md focus:outline-none focus:border-rose-500 resize-y bg-white"
          rows="5"
          placeholder="Describe your projects..."
          onChange={(e) => setProjectDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        className="px-6 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 focus:outline-none focus:bg-rose-800 active:bg-rose-900"
        onClick={handleProjectsSubmit}
      >
        Submit
      </button>
      <div className="mt-4 space-y-4">
        {projectChoices.map((choice, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            {choice.projects.map((project, pIdx) => (
              <div key={pIdx} className="my-4">
                <h3 className="text-xl font-semibold mb-2 text-red-700">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            ))}
            <div className="mt-2">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-700 active:bg-red-800"
                onClick={() =>
                  setResume((prevState) => ({
                    ...prevState,
                    projects: choice.projects
                    // [
                    //   ...prevState.projects,
                    //   ...choice.projects.map(
                    //     (p) => p.title + ": " + p.description
                    //   ),
                    // ],
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

export default Projects;
