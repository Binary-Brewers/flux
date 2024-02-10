// need to turn camera off when "Capture" is clicked/hit

import React, { useState, useRef, useEffect } from 'react';

const CameraCapture: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const boxSize = 40; 

  const startCamera = async () => {
    setImage(null); // Reset image state to null when starting camera

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { aspectRatio: 1 } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();

          videoRef.current.style.width = `${boxSize}vw`;
          videoRef.current.style.height = `${boxSize}vw`; // Keep square aspect ratio
          videoRef.current.style.objectFit = 'cover'; // Ensures video fills the container without stretching
        }
      } catch (err) {
        console.error("Error accessing the camera: ", err);
      }
    }
  };

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageData = canvasRef.current.toDataURL('image/png');
        setImage(imageData);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div style={{ width: `${boxSize}vw`, height: `${boxSize}vw` }} className="bg-white flex items-center justify-center mb-5 overflow-hidden">
        {!image ? (
          <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay />
        ) : (
          <img src={image} alt="Captured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
      </div>
      <div>
        <button onClick={startCamera} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Take Picture</button>
        <button onClick={takePicture} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Capture</button>
      </div>
      <canvas ref={canvasRef} className="hidden"></canvas>
    </div>
  );
};

export default CameraCapture;
