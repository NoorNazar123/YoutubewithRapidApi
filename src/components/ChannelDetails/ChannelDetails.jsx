import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../Feed/ChannelCard";
import VideoCard from "../Feed/VideoCard";


import { fetchDataFromApi } from "../../utils/fetchFromApi";
import Videobar from "../Feed/Videobar";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  console.log("dfdf", videos);

  useEffect(() => {
    fetchDataFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      if (data?.items) {
        setChannelDetail(data?.items[0]);
      } else {
        console.log("Not getting data");
      }
    });

    // channels?part=snippet,statistics&id=UCBVjMGOIkavEAhyqpxJ73Dw&q=js mastery
    fetchDataFromApi(
      `search?channelId=${id}&part=snippet%2Cid&order=date`
    ).then((videosData) => {
      if (videosData?.items) {
        setVideos(videosData?.items);
      } else {
        console.log("not getting data");
      }
    });
    // const fetchResult = async () => {
    //   try {
    //     // const data = await fetchDataFromApi(`channels?part=snippet&id=${id}`);
    //     // setChannelDetail(data.items)
    //     const dataChnID = fetchDataFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    //     setVideos(dataChnID?.items)

    //   } catch (error) {
    //     console.error("Error fetching data:", error);
    //   }
    // };
    // fetchResult();
  }, [id]);

  return (
    <div className="w-full min-h-[95vh] bg-black ">
      <div className="flex justify-center flex-col">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,36,15,1) 0%, rgba(2,40,60,1) 35%, rgba(205,0,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard
          channelDetail={channelDetail}
          marginTop="-100px"
          zIndex="99"
        />
        <div className="flex justify-between p-4 flex-wrap"> 
          {/* {videos.length > 0 && videos.map((video)=>(<VideoCard video={video} />))} */}
          <Videobar videos={videos} /> 
        </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
