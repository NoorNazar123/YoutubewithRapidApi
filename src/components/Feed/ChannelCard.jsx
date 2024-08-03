import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const ChannelCard = ({ channelDetail, marginTop,zIndex  }) => {
  return ( 
    <div  
    style={{
      marginTop: marginTop, 
      zIndex: zIndex,
    }}
    className="w-full md:w-[330px]  p-2 text-white m-2 text-center mx-auto"> 
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="w-[200px] h-[200px]  overflow-hidden rounded-[50%] mx-auto border">
          <img
            className="w-full h-full hover:scale-110 duration-500"
            src={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              "demochennelThambnails"
            }
            alt={channelDetail?.snippet?.title}
          />
        </div>
        <p className="text-[18px] text-gray-400  mt-8 px-2 leading-[35px] inline-block">
          {channelDetail?.snippet?.title}
        </p>
        <div className="w-[15px] h-[15px] ml-4 rounded-[50%] inline-block items-center bg-gray-200  p-2">
          <FaCheck className=" translate-x-[-5px]  text-black translate-y-[-4px] font-[200] text-[10px]" />
        </div>
        <p>
          {channelDetail?.statistics?.subscriberCount && (
            <div>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscriber
            </div>
          )}
        </p>
      </Link>
    </div>
  );
};

export default ChannelCard;
