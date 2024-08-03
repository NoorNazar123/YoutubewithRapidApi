import React from 'react';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard'; 
 
const Videobar = ({ videos }) => { 
  console.log(videos);
  return (
    <div className='w-full md:flex flex-wrap justify-center '>
      {videos && videos.map((item, index) => (
        <div key={index}> 
          {item.id.videoId && <VideoCard video={item} />}  
          {item.id.channelId && <ChannelCard channelDetail={item} />}   
        </div>  
      ))}
    </div> 
  );
};

export default Videobar;
