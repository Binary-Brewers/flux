// "use client";
// import React, { useState } from 'react';

// const CameraCapture: React.FC = () => {
//   const [image, setImage] = useState<string | null>(null);
//   const fileInputRef = React.useRef<HTMLInputElement>(null);

//   const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const files = event.target.files;
//     if (files && files[0]) {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(files[0]);
//       fileReader.onload = (loadEvent) => {
//         const result = loadEvent.target?.result;
//         if (result) {
//           setImage(result.toString());
//         }
//       };
//     }
//   };

//   const triggerFileInput = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-start pt-16 h-screen"> {/* Increased base padding-top */}
//       <div className="w-full max-w-md px-4">
//         {!image ? (
//           <button onClick={triggerFileInput} className="w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700">
//             Take Image
//           </button>
//         ) : (
//           <button onClick={() => setImage(null)} className="w-full px-4 py-2 mb-4 bg-red-500 text-white rounded hover:bg-red-700">
//             Delete Image
//           </button>
//         )}
//       </div>
//       <div className="flex justify-center items-center w-full flex-1">
//         {image && (
//           <img src={image} alt="Captured" className="max-w-md max-h-full object-contain" />
//         )}
//       </div>
//       <input
//         type="file"
//         accept="image/*"
//         capture="environment" // Use "user" for front camera, "environment" for rear camera
//         onChange={handleCapture}
//         ref={fileInputRef}
//         className="hidden"
//       />
//     </div>
//   );
// };

// export default CameraCapture;

"use client";
import React, { useState } from 'react';

const CameraCapture: React.FC = () => {
  const [imageData, setImageData] = useState<{ src: string; name: string } | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (loadEvent) => {
        const result = loadEvent.target?.result;
        if (result) {
          setImageData({ src: result.toString(), name: file.name });
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
    <div className="flex flex-col items-center justify-start pt-16 h-screen">
      <div className="w-full max-w-md px-4">
        {!imageData ? (
          <button onClick={triggerFileInput} className="w-full px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-700">
            Take Image
          </button>
        ) : (
          <button onClick={() => setImageData(null)} className="w-full px-4 py-2 mb-4 bg-red-500 text-white rounded hover:bg-red-700">
            Delete Image
          </button>
        )}
      </div>
      <div className="flex justify-center items-center w-full flex-1">
        {imageData && (
          <>
            <img src={imageData.src} alt="Captured" className="max-w-md max-h-full object-contain" />
            <p className="text-center mt-2">{imageData.name}</p> {/* Display the file name and extension */}
          </>
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
