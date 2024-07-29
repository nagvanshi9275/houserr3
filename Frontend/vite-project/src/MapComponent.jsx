

import React, { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    // Replace 'YOUR_API_KEY_HERE' with your actual MapTiler API key
    maptilersdk.config.apiKey = 'vmbGU4dvpu3GjHWbXDcU';

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [0, 0], // Starting position [lng, lat]
      zoom: 1 // Starting zoom
    });

    // Add navigation control (zoom buttons)
    map.current.addControl(new maptilersdk.NavigationControl(), 'top-right');

  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default MapComponent;







