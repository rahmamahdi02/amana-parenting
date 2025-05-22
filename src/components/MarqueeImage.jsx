import React from 'react';
import yourImage from '../assets/marquee-image.png';

const MarqueeImage = () => {
  const animationStyle = `
    @keyframes marquee {
      0%   { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }

    .marquee-container {
      overflow: hidden;
      width: 100%;
    }

    .marquee-track {
      display: flex;
      width: fit-content;
      animation: marquee 30s linear infinite;
    }
  `;

  const images = Array(6).fill(yourImage);

  return (
    <div className="marquee-container">
      <style>{animationStyle}</style>
      <div className="marquee-track">
        {[...images, ...images].map((img, i) => (
          <img key={i} src={img} alt="marquee" className="h-40 mx-4" />
        ))}
      </div>
    </div>
  );
};

export default MarqueeImage;
