import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi";

import { FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header className="border-b border-gray bg-white">
      <div className="wrapper py-2">
        <div className=" flex  md:grid grid-cols-6 justify-between py-3">
          <div className="col-span-4  flex items-center gap-5">
            <Link href={"#"} className="text-5xl font-bold">
              Evaly
            </Link>
            <div className="hidden w-full bg-gray md:flex gap-5 items-center  pl-5 rounded-md">
              <div className="w-full flex ">
                <input
                  type="text"
                  placeholder="Search in Evaly"
                  className=" w-full bg-transparent p-3 outline-none"
                />
                <button
                  className="bg-black 
               text-white px-5 rounded-r-lg gap-2 p-2 text-md font-medium ">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-end gap-3">
            <Link
              href={"#"}
              className="border px-2 py-1.5 rounded-md border-transparent hover:bg-graysm hover:border-gray hover:duration-300">
              <BiCart size={"25px"} />
            </Link>
            <Link
              href={"#"}
              className="flex items-center gap-1  border px-3 py-1.5 rounded-md border-transparent hover:border-gray hover:duration-300 hover:bg-graysm">
              <FiUser size={"20px"} />{" "}
              <span className="text-lg hidden md:block">Sign In</span>
            </Link>
          </div>
        </div>
        <div className="md:hidden w-full bg-gray flex gap-5 items-center  pl-5 rounded-md">
          <div className="w-full flex ">
            <input
              type="text"
              placeholder="Search in Evaly"
              className=" w-full bg-transparent p-2.5 outline-none"
            />
            <button
              className="bg-black 
               text-white px-5 rounded-r-lg gap-2 p-2 text-md font-medium ">
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
