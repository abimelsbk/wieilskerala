import React from "react";

const logos = [
  { src: "/assets/sponsors/wieils.jpg", alt: "WIE ILS Logo" },
  { src: "/assets/sponsors/wie.jpg", alt: "WIE Logo" },
  { src: "/assets/sponsors/ieeeks.webp", alt: "IEEE Kerala Section Logo" },
  { src: "/assets/sponsors/WIE KS.png", alt: "WIE KS Logo" },
];

const LogoCarousel: React.FC = () => {
  const scrollStyle: React.CSSProperties = {
    display: "flex",
    width: "100%",
    animation: "marquee 5s linear infinite",
  };
  return (
    <>
      <style>
        {`@keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-150%); }
        }`}
      </style>
      <div className="py-4 w-screen overflow-hidden lg:hidden">
        <div style={scrollStyle}>
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={`${logo.src}-${idx}`}
              src={logo.src}
              alt={logo.alt}
              className="h-12 flex-shrink-0 mx-10"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default LogoCarousel;
