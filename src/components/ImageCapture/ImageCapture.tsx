// // need to turn camera off when "Capture" is clicked/hit

// import React, { useState, useRef, useEffect } from 'react';

// const CameraCapture: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
  
//   const boxSize = 40; 

//   const startCamera = async () => {
//     setImage(null); // Reset image state to null when starting camera

//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: { aspectRatio: 1 } });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();

//           videoRef.current.style.width = `${boxSize}vw`;
//           videoRef.current.style.height = `${boxSize}vw`; // Keep square aspect ratio
//           videoRef.current.style.objectFit = 'cover'; // Ensures video fills the container without stretching
//         }
//       } catch (err) {
//         console.error("Error accessing the camera: ", err);
//       }
//     }
//   };

//   const takePicture = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext('2d');
//       if (context) {
//         canvasRef.current.width = videoRef.current.videoWidth;
//         canvasRef.current.height = videoRef.current.videoHeight;
//         context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//         const imageData = canvasRef.current.toDataURL('image/png');
//         setImage(imageData);
//       }
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div style={{ width: `${boxSize}vw`, height: `${boxSize}vw` }} className="bg-white flex items-center justify-center mb-5 overflow-hidden">
//         {!image ? (
//           <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay />
//         ) : (
//           <img src={image} alt="Captured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         )}
//       </div>
//       <div>
//         <button onClick={startCamera} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Take Picture</button>
//         <button onClick={takePicture} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Capture</button>
//       </div>
//       <canvas ref={canvasRef} className="hidden"></canvas>
//     </div>
//   );
// };

// export default CameraCapture;


// import React, { useState, useRef, useEffect } from 'react';

// const CameraCapture: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const [useFrontCamera, setUseFrontCamera] = useState(true); // State to toggle between front and back camera
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [stream, setStream] = useState<MediaStream | null>(null); // Keep track of the stream for cleanup

//   const boxSize = 40; 

//   useEffect(() => {
//     // Effect cleanup function to stop the camera stream when component unmounts
//     return () => {
//       if (stream) {
//         stopCameraStream();
//       }
//     };
//   }, [stream]);

//   const startCamera = async () => {
//     setImage(null); // Reset image state to null when starting camera
//     stopCameraStream(); // Ensure any existing streams are stopped before starting a new one

//     const cameraConstraints = {
//       video: {
//         aspectRatio: 1,
//         facingMode: useFrontCamera ? "user" : "environment", // Toggle between front and back camera
//       }
//     };

//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       try {
//         const newStream = await navigator.mediaDevices.getUserMedia(cameraConstraints);
//         setStream(newStream); // Save stream to state for later access
//         if (videoRef.current) {
//           videoRef.current.srcObject = newStream;
//           videoRef.current.play();

//           videoRef.current.style.width = `${boxSize}vw`;
//           videoRef.current.style.height = `${boxSize}vw`; // Keep square aspect ratio
//         }
//       } catch (err) {
//         console.error("Error accessing the camera: ", err);
//       }
//     }
//   };

//   const stopCameraStream = () => {
//     if (stream) {
//       stream.getTracks().forEach(track => track.stop());
//       setStream(null); // Clear the stream from state
//     }
//   };

//   const takePicture = () => {
//     if (videoRef.current && canvasRef.current) {
//       const context = canvasRef.current.getContext('2d');
//       if (context) {
//         canvasRef.current.width = videoRef.current.videoWidth;
//         canvasRef.current.height = videoRef.current.videoHeight;
//         context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
//         const imageData = canvasRef.current.toDataURL('image/png');
//         setImage(imageData);
//         stopCameraStream(); // Turn off camera after capturing image
//       }
//     }
//   };

//   const toggleCamera = () => {
//     setUseFrontCamera(!useFrontCamera); // Toggle camera state
//     startCamera(); // Restart camera with new state
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <div style={{ width: `${boxSize}vw`, height: `${boxSize}vw` }} className="bg-white flex items-center justify-center mb-5 overflow-hidden">
//         {!image ? (
//           <video ref={videoRef} style={{ width: '100%', height: '100%', objectFit: 'cover' }} autoPlay />
//         ) : (
//           <img src={image} alt="Captured" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//         )}
//       </div>
//       <div>
//         <button onClick={toggleCamera} className="mr-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Toggle Camera</button>
//         <button onClick={takePicture} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Capture</button>
//       </div>
//       <canvas ref={canvasRef} className="hidden"></canvas>
//     </div>
//   );
// };

// export default CameraCapture;

import React, { useState } from 'react';

const CameraCapture: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files[0]);
      fileReader.onload = (loadEvent) => {
        const result = loadEvent.target?.result;
        if (result) {
          setImage(result.toString());
        }
      };
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-start pt-16 h-screen"> {/* Increased base padding-top */}
      <div className="w-full max-w-md px-4">
        {!image ? (
          <button onClick={triggerFileInput} className="w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700">
            Take Image
          </button>
        ) : (
          <button onClick={() => setImage(null)} className="w-full px-4 py-2 mb-4 bg-red-500 text-white rounded hover:bg-red-700">
            Delete Image
          </button>
        )}
      </div>
      <div className="flex justify-center items-center w-full flex-1">
        {image && (
          <img src={image} alt="Captured" className="max-w-md max-h-full object-contain" />
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        capture="environment" // Use "user" for front camera, "environment" for rear camera
        onChange={handleCapture}
        ref={fileInputRef}
        className="hidden"
      />
    </div>
  );
};

export default CameraCapture;

