// components/Resume.js

import { useResume } from "@/contexts/ResumeContext";

const Resume = () => {
  const { resume, setResume } = useResume(); // Using the centralized state management

  return (
    <div className="p-8 bg-white rounded shadow-lg max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-blue-700">Resume</h1>

      {/* Profile Summary */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Profile Summary
        </h2>
        <p className="text-gray-700">{resume.profileSummary}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Work Experience
        </h2>
        <h3 className="text-xl font-medium mb-2 text-green-500">
          {resume.workExperience.title}
        </h3>
        <ul className="list-disc pl-5 space-y-2">
          {resume.workExperience && resume.workExperience.length > 0 && resume.workExperience.description.map((desc, index) => (
            <li key={index} className="text-gray-700">
              {desc}
            </li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-red-600">Projects</h2>
        {resume.projects && resume.projects.length > 0 && resume.projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-medium mb-2 text-red-500">
              {project.title}
            </h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Resume;
