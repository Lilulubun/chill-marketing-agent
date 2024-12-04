"use client";
import { useState } from 'react';


export default function Home() {
  const [keyword, setKeyword] = useState('');
  const [timeRange, setTimeRange] = useState('');
  const [contentGoals, setContentGoals] = useState([]);
  const [productDescription, setProductDescription] = useState('');
  const [generatedContent, setGeneratedContent] = useState(null);
  const [dataSummary, setDataSummary] = useState(null);

  const contentTypes = [
    "Educational Content",
    "Inspirational Content",
    "Entertaining Content",
    "Informative Content",
    "Promotional Content",
    "Interactive Content",
    "Visual-Driven Content",
    "User-Generated Content (UGC)",
    "Storytelling Content",
    "Product Demonstrations",
  ];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setContentGoals([...contentGoals, value]);
    } else {
      setContentGoals(contentGoals.filter((goal) => goal !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call your backend API here
    // For demonstration, we'll just set dummy data
    setDataSummary({
      tweetsGathered: 100,
      groups: 5,
      engagementStats: {
        likes: 500,
        retweets: 150,
        comments: 75,
      },
    });
    setGeneratedContent("This is a generated marketing content based on your inputs.");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded shadow-md">
        {/* Keyword Input */}
        <h1 className="text-4xl font-bold mb-6 text-black text-center">Marketing Content Generator</h1>
        <div className="mb-4">
          <label className="block text-black">Enter Keyword:</label>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        {/* Time Range Input */}
        <div className="mb-4">
          <label className="block text-black">Select Time Range:</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select time range here</option>
            <option value="1 hour ago">One Hour Ago</option>
            <option value="1 day ago">One Day Ago</option>
            <option value="1 week ago">One Week Ago</option>
          </select>
        </div>

        {/* Content Goals Checkboxes */}
        <div className="mb-4">
          <label className="block text-black mb-2">Select Tone and Content Goals:</label>
          {contentTypes.map((type, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={type}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span className="text-black">{type}</span>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      {/* Data Summary */}
      {dataSummary && (
        <div className="w-full max-w-lg bg-white p-6 rounded shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Data Summary</h2>
          <p><strong className="text-black">Tweets Gathered:</strong> {dataSummary.tweetsGathered}</p>
          <p><strong className="text-black">Groups:</strong> {dataSummary.groups}</p>
          <div className="mt-2">
            <strong className="text-black">Engagement Statistics:</strong>
            <ul className="list-disc list-inside">
              <li className="text-black">Likes: {dataSummary.engagementStats.likes}</li>
              <li className="text-black">Retweets: {dataSummary.engagementStats.retweets}</li>
              <li className="text-black">Comments: {dataSummary.engagementStats.comments}</li>
            </ul>
          </div>
        </div>
      )}

      {/* Content Generation Section */}
      {dataSummary && (
        <div className="w-full max-w-lg bg-white p-6 rounded shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Generate Content</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Describe Your Product:</label>
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            onClick={() => setGeneratedContent("This is a generated marketing content based on your product description.")}
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Generate Content
          </button>

          {/* Display Generated Content */}
          {generatedContent && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold">Generated Content:</h3>
              <p className="mt-2">{generatedContent}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
