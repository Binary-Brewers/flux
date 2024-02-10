"use client";
import Navbar from "../components/Navbar/Navbar";
import ImageCapture from "../components/ImageCapture/ImageCapture";

const Home = () => {
  return (
    // This outer div remains without any specific background color; it inherits from the page
    <div className="min-h-screen flex flex-col"> 
      <Navbar />
      {/* This div wraps the rest of the content, setting the background to white in light mode and a gray shade in dark mode */}
      <div className="flex-1 bg-white dark:bg-gray-800 flex justify-center items-center p-4">
  <ImageCapture />
</div>

    </div>
  )
}

export default Home;
