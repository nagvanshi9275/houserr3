


// useScript.js
import { useState, useEffect } from 'react';

const useScript = (src) => {
  const [status, setStatus] = useState(src ? 'loading' : 'idle');

  useEffect(() => {
    if (!src) {
      setStatus('idle');
      return;
    }

    // Check if the script is already added
    let script = document.querySelector(`script[src="${src}"]`);
    if (!script) {
      // Create script
      script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => setStatus('ready');
      script.onerror = () => setStatus('error');
      document.body.appendChild(script);
    } else {
      setStatus('ready');
    }

    // Cleanup on unmount
    return () => {
      if (script) {
        script.remove();
      }
    };
  }, [src]);

  return status;
};

export default useScript;







