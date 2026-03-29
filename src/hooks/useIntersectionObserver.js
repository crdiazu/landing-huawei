import { useEffect } from 'react';

export const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optional: observer.unobserve(entry.target); if we only want to fade in once
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.parallax-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};