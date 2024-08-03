import React from "react";
import { FaHome, FaMusic, FaPodcast, FaHandHoldingHeart } from "react-icons/fa";
import { PiBracketsAngleBold } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { RiLiveFill } from "react-icons/ri";
import { MdSportsScore } from "react-icons/md";
import { IoCafeSharp } from "react-icons/io5";
 
// const selectedCategory = "New";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => { 
  const feedItem = [
    {
      id: 1,
      icon: <FaHome />,
      iconDes: "New",
    },
    {
      id: 2,
      icon: <PiBracketsAngleBold />,
      iconDes: "JS Mastery",
    },
    {
      id: 3,
      icon: <PiBracketsAngleBold />,
      iconDes: "Coding",
    },
    {
      id: 4,
      icon: <PiBracketsAngleBold />,
      iconDes: "Reactjs",
    },
    {
      id: 5,
      icon: <PiBracketsAngleBold />,
      iconDes: "Nextjs",
    },
    {
      id: 6,
      icon: <FaMusic />,
      iconDes: "Music",
    },
    {
      id: 7,
      icon: <MdCastForEducation />,
      iconDes: "Education",
    },
    {
      id: 8,
      icon: <FaPodcast />,
      iconDes: "Podcast",
    },
    {
      id: 9,
      icon: <BiSolidCameraMovie />,
      iconDes: "Movie",
    },
    {
      id: 10,
      icon: <SiYoutubegaming />,
      iconDes: "Gaming",
    },
    {
      id: 11,
      icon: <RiLiveFill />,
      iconDes: "Live",
    },
    {
      id: 12,
      icon: <MdSportsScore />,
      iconDes: "Sport",
    },
    {
      id: 13,
      icon: <IoCafeSharp />,
      iconDes: "Feshion",
    },
    {
      id: 14,
      icon: <FaHandHoldingHeart />,
      iconDes: "Beauty",
    },
  ];

  return (
    <div>
      {feedItem &&
        feedItem.map((item) => ( 
          <button
            key={item.id}
            onClick={() => {
              setSelectedCategory(item.iconDes) 
            }}
            className="text-white flex gap-4  items-center m-4 hover:bg-red-600 duration-500 rounded-[24px] w-[150px] md:w-[160px] px-4 py-2"
            style={{
              background: item.iconDes === selectedCategory && "#fc1503",
            }}
          >
            <span
              style={{
                color: item.iconDes === selectedCategory ? "#fff" : "#fc1503",
              }}
              className="text-2xl"
            >
              {item.icon}
            </span>
            <p className="text-[16px] leading-[23px] font-[400] ">
              {item.iconDes}
            </p>
          </button>
        ))}
    </div>
  );
};

export default Sidebar;
