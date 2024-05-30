import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header className="border-b border-gray bg-white">
      <div className="wrapper">
        <div className="flex justify-between py-3">
          <div className="flex items-center gap-5">
            <Link href={"#"} className="text-5xl font-bold">
              Evaly
            </Link>
            <div className="w-[719px] bg-gray flex gap-5 items-center  pl-5 rounded-md">
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
          <div className=" flex items-center gap-3">
            <Link
              href={"#"}
              className="border px-2 py-1.5 rounded-md border-transparent hover:bg-graysm hover:border-gray hover:duration-300">
              <BiCart size={"25px"} />
            </Link>
            <Link
              href={"#"}
              className="flex items-center gap-1  border px-3 py-1.5 rounded-md border-transparent hover:border-gray hover:duration-300 hover:bg-graysm">
              <FiUser size={"20px"} /> <span className="text-lg ">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
