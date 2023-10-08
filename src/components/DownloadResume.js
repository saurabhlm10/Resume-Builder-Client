import { useResume } from "@/contexts/ResumeContext";
import html2pdf from "html2pdf.js";

export const DownloadResumeAsPDF = () => {
  const { resume: resumeData, setResume } = useResume();

  const generatePDF = () => {
    if (
      !resumeData.profileSummary ||
      !resumeData.workExperience.title ||
      !resumeData.workExperience.description ||
      resumeData.projects.length === 0
    )
      return window.alert("Your Resume Is Not Complete");

    // Creating an HTML representation of the resume
    let resumeHTML = `
      <h1>Resume</h1>
      <h2>Profile Summary</h2>
      <p>${resumeData.profileSummary}</p>
      
      <h2>Work Experience</h2>
      <h3>${resumeData.workExperience.title}</h3>
      <ul>
        ${resumeData.workExperience.description
          .map((item) => `<li>${item}</li>`)
          .join("")}
      </ul>
      
      <h2>Projects</h2>
      ${resumeData.projects
        .map(
          (project) => `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `
        )
        .join("")}
    `;

    // Using html2pdf to generate the PDF
    const pdfOptions = {
      margin: 10,
      filename: "Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 1 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    const content = document.createElement("div");
    content.innerHTML = resumeHTML;
    html2pdf().from(content).set(pdfOptions).save();
  };

  return (
    <button
      onClick={generatePDF}
      className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition ease-in-out duration-150"
    >
      Download Resume as PDF
    </button>
  );
};
