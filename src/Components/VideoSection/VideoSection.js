const VideoSection = () => {
    return (
      <div className="bg-gray-100 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Discover Our Journey</h2>
        <p className="text-lg text-gray-600 mt-4">
          A quick glimpse into our story, values, and expertise.
        </p>
        <div className="mt-6">
          <video
            src="/path-to-video.mp4"
            controls
            poster="/path-to-thumbnail.jpg"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-md"
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Watch More
        </button>
      </div>
    );
  };
  export default VideoSection;
  