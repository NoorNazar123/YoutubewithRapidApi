import logo from "../../utils/constant";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="bg-black flex  justify-between items-center px-4 md:px-[50px] py-4 md:py-[15px] sticky top-0 z-50">
      <img className="w-[50px] md:w-[70px]" src={logo} alt="logo" />

      <div className="w-[300px] md:w-[400px] rounded-3xl text-[16px] md:text-[20px] leading-[30px] md:leading-[35px] font-[400] bg-white flex justify-between items-center px-4 md:px-8 ml-4">
        <input
          className="w-full py-2 rounded-3xl outline-none px-2" 
          type="text"
          placeholder="search.."
        />
        <span className="text-gray-500">
          <IoIosSearch />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
