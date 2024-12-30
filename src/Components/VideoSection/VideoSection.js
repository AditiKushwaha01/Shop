import videoSrc from '../VideoSection/media/4865686-uhd_3840_2160_30fps.mp4';

const VideoSection = () => {
  return (
    <div className="relative w-full bg-gray-100">
      {/* Video Container */}
      <div className="relative h-[60vh] overflow-hidden">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center bg-black bg-opacity-50 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-[#fff]">
            Discover Our Journey
          </h2>
          <p className="mt-4 text-base md:text-lg">
            A quick glimpse into our story, values, and expertise.
          </p>
          <button
            className="mt-6 px-6 py-2 text-white rounded-lg hover:bg-opacity-90"
            style={{
              backgroundColor: '#D4AF37',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            Watch More
          </button>
        </div>
      </div>

      {/* Additional Content Below Video */}
      <div className="py-12 text-center bg-white">
        <h3 className="text-xl font-semibold text-gray-800">
          More About Our Mission
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore our initiatives and how we are making a difference in our
          community.
        </p>
      </div>
    </div>
  );
};

export default VideoSection;
