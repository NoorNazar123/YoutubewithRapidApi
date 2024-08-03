import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videobar from "../Feed/Videobar";
import { fetchDataFromApi } from "../../utils/fetchFromApi";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  console.log(videoDetail);

  useEffect(() => {
    fetchDataFromApi(`videos?part=snippet,statistics&id=${id}`) 
      .then((data) => {
        setVideoDetail(data?.items[0]);
      })
      .catch((err) => {
        console.log(`VideoDetails Error: ${err}`);
      }); 
  }, [id]); 

  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <div className="min-h-screen bg-black text-white md:flex p-4 gap-4">
      <div className="w-full md:w-[70%] h-[80vh] rounded-md border border-gray-400 ">
      <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          playing
          volume={1} 
          className="react-player"
          width='100%'
          height='90%'
          
        /> 
        {videoDetail && videoDetail.snippet ? (
          <p className="p-2 text-[18px] leading-[27px] font-[400]">{videoDetail.snippet.title}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div >
      <div className="w-full md:w-[20%]">right bar</div> 
    </div>
  );
};

export default VideoDetails;
