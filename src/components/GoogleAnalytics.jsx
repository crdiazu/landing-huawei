import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function GoogleAnalytics() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const location = useLocation();

  useEffect(() => {
    if (!measurementId) return;
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    const gtag = (...args) => window.dataLayer.push(args);
    gtag('js', new Date());
    gtag('config', measurementId, { page_path: location.pathname });
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !window.dataLayer) return;
    const gtag = (...args) => window.dataLayer.push(args);
    gtag('config', measurementId, { page_path: location.pathname });
  }, [location.pathname, measurementId]);

  return null;
}
