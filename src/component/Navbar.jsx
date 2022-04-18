import React from "react";
import { BiSearch } from "react-icons/bi";
import { GoBug } from "react-icons/go";

export default function Navbar() {
  const [key, setKey] = React.useState("");
  const search = async () => {
    window.location.href = `/api/cari/${key}`;
  };

  const handleChange = (event) => {
    setKey(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
  };

  return (
    <div className="w-full bg-[#1B1C25] opacity-90 fixed z-50 top-[-2px]">
      <div className="w-full h-20 max-w-[1000px] mx-auto flex items-center justify-between px-4">
        <div className="flex">
          <div className="text-4xl text-[#206A5D]">
            <GoBug />
          </div>
          <a href="/" className="text-2xl font-bold text-[#EBECF1]">
            Bugnime
          </a>
        </div>
        <div className=" ">
          <form
            onSubmit={handleSubmit}
            className="w-full flex justify-end items-center"
          >
            <input
              className="px-2 h-8 w-28 rounded-l-sm"
              type="text"
              id="header-search"
              placeholder="Search.."
              onChange={handleChange}
              value={key}
            />
            <button
              type="submit"
              className="bg-[#206A5D] px-2 h-8 text-xl text-[#EBECF1] rounded-r-sm "
            >
              <BiSearch />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
