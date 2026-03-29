import React, { useEffect, useRef } from 'react';

const ParallaxBackground = ({ 
  webpSrc, 
  fallbackSrc, 
  alt = "", 
  overlayColor = "rgba(0,0,0,0.3)",
  speed = 0.5 
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (wrapperRef.current) {
            const rect = wrapperRef.current.parentElement.getBoundingClientRect();
            // Calculate parallax offset
            const offset = (window.innerHeight / 2 - (rect.top + rect.height / 2)) * speed;
            wrapperRef.current.style.transform = `translateY(${offset}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <>
      <div className="parallax-overlay" style={{ backgroundColor: overlayColor }}></div>
      <div className="parallax-img-wrapper" ref={wrapperRef}>
        <picture>
          <source srcSet={`${webpSrc} 1x, ${webpSrc} 2x`} type="image/webp" />
          <img 
            src={fallbackSrc} 
            alt={alt} 
            className="parallax-img" 
            loading="lazy"
            srcSet={`${fallbackSrc} 1x, ${fallbackSrc} 2x`}
          />
        </picture>
      </div>
    </>
  );
};

export default ParallaxBackground;