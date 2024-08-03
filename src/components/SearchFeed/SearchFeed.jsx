import { useState, useEffect } from "react";
import Videobar from "../Feed/Videobar";
import { fetchDataFromApi } from "../../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([]);
 
  useEffect(() => {
    fetchDataFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(`Server Error: ${err}`);
      });
  }, [searchTerm]); 

  return (
    <div className="md:flex bg-black min-h-screen text-white ">
   
      <div className="px-4">
        <h1 className="w-full md:w-[50%] mx-auto text-[45px] leading-[45px] font-[900] ">
          Search for <span className="text-red-600 mx-4"> {searchTerm}</span>
          Video
        </h1>
        <div className=" my-4 ">
          <Videobar videos={videos} /> 
        </div>
      </div>
    </div>
  ); 
}; 

export default SearchFeed;


// const SearchFeed = () => {
//   return (
//     <div>
//       feedsearch
//     </div>
//   )
// }

// export default SearchFeed
