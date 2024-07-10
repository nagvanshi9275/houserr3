import React from 'react';

const ResponsiveVideo = ({ src }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingBottom: '56.25%', // 16:9 aspect ratio
        
        marginTop: '-30px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '90%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <video
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            div {
              paddingBottom: 75%; // Adjust aspect ratio for smaller screens
            }
          }
          @media (max-width: 480px) {
            div {
              paddingBottom: 100%; // Further adjust for very small screens
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResponsiveVideo;
