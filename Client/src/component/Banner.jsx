import React, { useState, useEffect } from "react";

function Banner() {
  const slides = [
    {
      title: "Empower Your Ideas",
      description: "Start the Season with an Energetic Marathon!.",
      background: "https://i.ibb.co/cK3msH9Y/qq.png",
    },
    {
      title: "Transform Lives",
      description: " Celebrate Unity with the National Day Marathon!.",
      background: "https://i.ibb.co/5g20r8fC/qw.png",
    },
    {
      title: "Innovate for the Future",
      description: "Be a part of the next big thing in innovation.",
      background: "https://i.ibb.co/jkQpBTQC/ppp.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Switch slides every 4 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden pt-16">
      {/* Slide Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg lg:text-xl max-w-2xl">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            } transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Banner;