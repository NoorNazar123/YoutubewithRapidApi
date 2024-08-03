import { useState } from "react";
import logo from "../../utils/constant";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearchTerm] = useState("");
  console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      navigate(`/search/${search}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="bg-black flex justify-between items-center px-4 md:px-[50px] py-4 md:py-[15px] sticky top-0 z-50">
      <Link to="/">
        <img className="w-[50px] md:w-[70px]" src={logo} alt="logo" />
      </Link>

      <form 
        onSubmit={handleSubmit} 
        className="w-[300px] md:w-[400px] rounded-3xl text-[16px] md:text-[20px] leading-[30px] md:leading-[35px] font-[400] bg-white flex justify-between items-center px-4 md:px-8 ml-4"
      >
        <input
          className="w-full py-2 rounded-3xl outline-none px-2"
          type="text"
          value={search}
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="search.."
        />
        <span className="text-gray-500">
          <IoIosSearch />
        </span>
      </form>
    </div>
  );
};

export default Navbar;
