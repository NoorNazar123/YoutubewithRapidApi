import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videobar from "../Feed/Videobar";
import { fetchDataFromApi } from "../../utils/fetchFromApi";
import { FaCheck } from "react-icons/fa";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState([]);
  const [videos, setVideos] = useState(null);
  console.log(videoDetail);

  useEffect(() => {
    fetchDataFromApi(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data?.items[0]);
      })
      .catch((err) => {
        console.log(`VideoDetails Error: ${err}`);
      });
    fetchDataFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => {
        console.log(`VideoDetails video bar Error: ${err}`);
      });
  }, [id]);

  if (!videoDetail?.snippet) return <div>Loading..</div>;

  const {
    snippet: { title, channelId, channelTitle, thumbnails
    },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="min-h-screen bg-black text-white md:flex p-4 justify-around">
      <div className="w-full md:w-[70%] h-[80vh] rounded-md ">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          playing
          volume={1}
          className="react-player h-[50%] md:h-[90%]"
          width="100%"
          height="90%"
          
          style={{
            border: "1px solid",
            borderRadius: "10px",
          }}
        />
        <div className="my-4">
          {videoDetail && videoDetail.snippet ? (
            <p className="text-[18px] leading-[27px] font-[400]">{title}</p>
          ) : (
            <p>Loading...</p>
          )}
          <div className="flex justify-between ">
            <div className="flex gap-4 items-center">
              <Link to={`/channel/${channelId}`}>
               
                <p className="text-[14px] md:text-16px font-[600]">Channel Name: {channelTitle}</p>
              </Link>
              <div className="w-[15px] h-[15px] ml-4 rounded-[50%] inline-block items-center bg-gray-200  p-2">
                <FaCheck className=" translate-x-[-5px]  text-black translate-y-[-4px] font-[200] text-[10px]" />
              </div>
            </div>
            <div>
              <p className="text-[12px] md:text-[16px] leading-[14px] font-[400]">Views: {parseInt(viewCount).toLocaleString()}</p>
              <p className="text-[12px] md:text-[16px] leading-[14px] font-[400]">Likes: {parseInt(likeCount).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[20%] md:flex flex-col items-center mt-[90px] md:mt-2">
        <Videobar videos={videos} direction="column" />
      </div>
    </div>
  );
};

export default VideoDetails;
