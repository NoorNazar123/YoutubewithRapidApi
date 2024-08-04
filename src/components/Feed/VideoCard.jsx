import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  }, 
}) => {
  // console.log(videoId, snippet);
  return (
    <div className="w-full md:w-[330px] p-2 text-white m-2">  

       <Link to={videoId ? `/video/${videoId}` : "demoUrl"}>
        <div className="w-full  h-[200px] overflow-hidden rounded-xl border mb-2">
          <img
            className="w-full h-full hover:scale-110 duration-500"
            src={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
          />
        </div>
      </Link>
      <Link to={videoId ? `/video/${videoId}` : "demoUrl"}>
        <p className="text-[18px] px-2 leading-[22px]">
          {snippet?.title.slice(0, 50) || "demoTitle"}
        </p>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >
        <span className="text-[12px] px-2  text-gray-400 ">
          {snippet?.channelTitle || "demochannelId"}
        </span>
      </Link>
      <div className="w-[15px] h-[15px] ml-4 rounded-[50%] inline-block items-center bg-gray-200  p-2">
        <FaCheck
          className=" translate-x-[-5px]  text-black translate-y-[-4px] font-[200] 
        text-[10px]"
        />
      </div> 
    </div>
  );
};

export default VideoCard;
