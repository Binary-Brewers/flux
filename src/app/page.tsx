// "use client";
import Navbar from "../components/Navbar/Navbar";
import ImageCapture from "../components/ImageCapture/ImageCapture";

const Home = () => {
  console.log('Rendering Home component');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-white dark:bg-gray-800 flex justify-center items-center p-4">
        <ImageCapture />
      </div>
    </div>
  )
}

export default Home;
