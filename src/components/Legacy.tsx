import React, { useState } from "react";
import {
  History,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full cursor-pointer z-10 shadow-md"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5 text-purple-600" />
      </div>

      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full cursor-pointer z-10 shadow-md"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5 text-purple-600" />
      </div>

      <img
        src={images[currentIndex]}
        alt={`Event photo ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-300"
      />

      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-purple-600" : "bg-white/70"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

const LegacyEvent = ({
  year,
  location,
  description,
  images,
  isLeft = true,
}) => {
  return (
    <div
      className={`flex flex-col ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-6 md:gap-10 items-center mb-16`}
    >
      <div className="md:w-1/2 w-full h-[300px] md:h-[400px]">
        <div className="relative h-full">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isLeft
                ? "from-purple-400 to-indigo-400"
                : "from-indigo-400 to-purple-400"
            } opacity-75 rounded-xl ${
              isLeft ? "transform rotate-2" : "transform -rotate-2"
            }`}
          ></div>
          <div
            className={`relative h-full ${
              isLeft ? "transform -rotate-2" : "transform rotate-2"
            } transition-transform duration-500 hover:rotate-0`}
          >
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-lg">
            <Calendar className="h-5 w-5 text-purple-600" />
          </div>
          <span className="text-purple-600 font-semibold">{year}</span>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-100 p-2 rounded-lg">
            <MapPin className="h-5 w-5 text-purple-600" />
          </div>
          <span className="text-gray-700 font-medium">{location}</span>
        </div>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Legacy = () => {
  // Define the image paths for 2018 and 2022 events
  const images2018 = [
    "/assets/2018/wie18-1.png",
    "/assets/2018/wie18-2.png",
    "/assets/2018/wie18-3.png",
    "/assets/2018/wie18-4.png",
  ];

  const images2022 = [
    "/assets/2022/Pic 2.jpeg",
    "/assets/2022/Pic 9.jpeg",
    "/assets/2022/Pic 13.jpeg",
    "/assets/2022/Pic 18.jpeg",
    "/assets/2022/Pic 39.jpeg",
  ];

  return (
    <section id="legacy" className="py-24 bg-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <History className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
              Our Legacy
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            WIE ILS has been transforming lives since day one
          </h2>

          <p className="text-gray-600 leading-relaxed">
            From our humble beginnings to our current summit, we've been
            creating spaces for growth, connection, and transformation for women
            in engineering and leadership.
          </p>
        </div>

        <div className="mt-20">
          <LegacyEvent
            year="2018"
            location="Kochi, Kerala"
            description="Featured speakers from DRDO, Cisco, and more — plus hands-on workshops and cultural showcases, even during the Kerala floods. Despite challenging circumstances, the inaugural summit brought together passionate leaders committed to advancing women in engineering."
            images={images2018}
            isLeft={true}
          />

          <LegacyEvent
            year="2022"
            location="Trivandrum, Kerala"
            description="Celebrated 20 years of WIE Kerala with calligraphy, rooftop yoga, live bands, and a powerful lineup of changemakers. This milestone summit expanded our horizons with interdisciplinary sessions bridging technology, arts, and wellness, creating a holistic approach to leadership development."
            images={images2022}
            isLeft={false}
          />

          <div className="text-center mt-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Now in 2025, we're going even further.
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us in Kozhikode as we continue this journey of
              transformation, bringing together the brightest minds and most
              passionate hearts to shape the future of leadership.
            </p>

            <a
              href="#register"
              className="inline-block mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-purple-400/25"
            >
              Be Part of Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
