import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Videobar from "./Videobar";
import { fetchDataFromApi } from "../../utils/fetchFromApi";
import { data } from "autoprefixer";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    fetchDataFromApi(`search?part=snippet&q=${selectedCategory}`) 
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(`Server Error: ${err}`);
      });
  }, [selectedCategory]);

  if(data?.items){
    return <div className="w-full h-screen text-7xl font-[900] leading-[45px] bg-black text-white flex justify-center items-center">Loading...</div>
  } 
  return (
    <div className="md:flex bg-black min-h-screen text-white ">
      <div className="w-[100%] md:w-[20%] flex items-center flex-col gap-8 md:gap-2 border-r border-gray-500">
        <div >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <h2 className="text-[14px] leading-[16px] font-[400] px-4 text-center my-4 hidden md:block">
          CopyWrite@2024 <br /> Noor e Nazar
        </h2>
      </div>
      <div className="w-full md:w-[80%] px-4">
        <h1 className="text-[45px] leading-[45px] font-[900]">
          {selectedCategory}
          <span className="text-red-600 mx-4">Video</span>
        </h1>
        <div className=" my-4 ">
          <Videobar videos={videos} />
        </div>
      </div>
    </div>
  ); 
};

export default Feed;
