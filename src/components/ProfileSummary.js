import { useState } from 'react';
import axiosInstance from "@/axios";
import { useResume } from '../contexts/ResumeContext';

const ProfileSummary = () => {
  const { resume, setResume } = useResume();
  
  const exampleSummary = "I am a data scientist having an experience of around 1 year and working at xyz company. I have good knowledge in Python, ML, DL, Computer Vision, NLP, and generative ai.";
  const [profileSummary, setProfileSummary] = useState(exampleSummary);
  const [summaryChoices, setSummaryChoices] = useState([]);
  const [loading, setLoading] = useState(false);  // Loading state
  
  const handleProfileSummarySubmit = async () => {
    setLoading(true);  // Set loading to true when starting the request
    try {
      const response = await axiosInstance.get("/getProfileSummary");
      setSummaryChoices(response.data.outputs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);  // Set loading to false when request is finished
    }
  };

  return (
    <div className="mb-8 p-4 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 font-semibold text-gray-800 border-b-2 border-purple-400 pb-2">
        Profile Summary
      </h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-blue-700 mb-2" htmlFor="profileSummary">
          Your Summary
        </label>
        <textarea
          id="profileSummary"
          className="w-full p-3 mb-4 border-2 border-blue-400 rounded-md focus:outline-none focus:border-indigo-500 resize-y bg-white"
          rows="5"
          placeholder="Enter your professional summary..."
          value={profileSummary}
          onChange={(e) => setProfileSummary(e.target.value)}
        ></textarea>
      </div>
      <button
        className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-800 active:bg-indigo-900"
        onClick={handleProfileSummarySubmit}
        disabled={loading}  // Disable the button during loading
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>

      {/* Render the summary choices from the backend with "Use" buttons */}
      <div className="mt-4 space-y-2">
        {loading ? (
          // Spinner using tailwind
          <div className="flex justify-center">
            <div className="w-6 h-6 border-t-2 border-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          summaryChoices.map((choice, idx) => (
            <div key={idx} className="flex justify-between items-center p-2 bg-gray-200 rounded">
              <p>{choice}</p>
              <button 
                className="px-3 py-1 bg-blue-500 text-white rounded"
                onClick={() => setResume(prevState => ({ ...prevState, profileSummary: choice }))}
              >
                Use
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProfileSummary;
