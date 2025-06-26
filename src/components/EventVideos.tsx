import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  year: string;
  aspectRatio: "1:1" | "16:9" | "9:16";
  description: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  title,
  year,
  aspectRatio,
  description,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const isGoogleDriveUrl = videoUrl.includes("drive.google.com");

  const containerClasses =
    aspectRatio === "1:1"
      ? "aspect-square max-w-md mx-auto"
      : aspectRatio === "9:16"
      ? "aspect-[9/16] max-w-sm mx-auto"
      : "aspect-[16/9] max-w-2xl mx-auto";

  return (
    <div className="group">
      <div
        className={`relative ${containerClasses} rounded-xl overflow-hidden shadow-lg bg-black`}
      >
        {isGoogleDriveUrl ? (
          // Google Drive iframe embed
          <>
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              title={`${title} Video`}
            />
            {/* Note: Google Drive videos have their own controls */}
          </>
        ) : (
          // Regular video element for direct URLs
          <>
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              muted={isMuted}
              loop
              playsInline
              onClick={handleVideoClick}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              onError={(e) => {
                console.error("Video failed to load:", e);
              }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Controls */}
            <div
              className={`absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center transition-opacity duration-300 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <button
                onClick={togglePlay}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 transform hover:scale-110 shadow-lg"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-purple-600" />
                ) : (
                  <Play className="h-8 w-8 text-purple-600 ml-1" />
                )}
              </button>
            </div>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className={`absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-200 ${
                showControls ? "opacity-100" : "opacity-0"
              }`}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5 text-white" />
              ) : (
                <Volume2 className="h-5 w-5 text-white" />
              )}
            </button>
          </>
        )}

        {/* Year Badge */}
        <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {year}
        </div>
      </div>

      {/* Video Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

interface EventVideosProps {
  video2018Url?: string;
  video2022Url?: string;
}

const EventVideos: React.FC<EventVideosProps> = ({
  video2018Url,
  video2022Url,
}) => {
  // Convert Google Drive sharing URLs to embeddable format
  const convertGoogleDriveToEmbeddable = (shareUrl: string) => {
    const fileIdMatch = shareUrl.match(/\/d\/([a-zA-Z0-9-_]+)/);
    if (fileIdMatch) {
      // Use Google Drive's preview URL which works better for embedding
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return shareUrl;
  };

  const defaultVideo2018 =
    video2018Url ||
    convertGoogleDriveToEmbeddable(
      "https://drive.google.com/file/d/1pcYjwWs0SxP64YpVf5sUQ-YkW0VkGZCE/view?usp=sharing"
    );
  const defaultVideo2022 =
    video2022Url || convertGoogleDriveToEmbeddable("https://drive.google.com/file/d/1Sk8aanqK-W4uXriQyfESUEw3AFgHQ3Ee/view?usp=sharing");

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Event Highlights
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Relive the memorable moments from our previous WIE ILS summits
            through these highlight reels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* 2018 Video - 16:9 aspect ratio */}
          <VideoPlayer
            videoUrl={defaultVideo2018}
            title="WIE ILS 2018 Highlights"
            year="2018"
            aspectRatio="16:9"
            description="Experience the inspiring moments from our inaugural summit in Kochi, featuring speakers from DRDO, Cisco, and resilient sessions during the Kerala floods."
          />

          {/* 2022 Video - 1:1 aspect ratio */}
          <VideoPlayer
            videoUrl={defaultVideo2022}
            title="WIE ILS 2022 Celebration"
            year="2022"
            aspectRatio="1:1"
            description="Celebrating 20 years of WIE Kerala in Trivandrum with calligraphy workshops, rooftop yoga, live performances, and transformative leadership sessions."
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Ready to be part of our next chapter?
          </p>
          <a
            href="#register"
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-purple-400/25"
          >
            Join WIE ILS 2025
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventVideos;
