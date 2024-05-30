import Link from "next/link";
import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { CgShoppingBag } from "react-icons/cg";
import { FaHome } from "react-icons/fa";

const SubHeader = () => {
  return (
    <div className="py-5 border-b border-gray/50 shadow-md bg-white">
      <ul className="wrapper text-blacklg flex gap-5">
        <li>
          <Link href="#" className="flex items-center gap-2">
            <FaHome size={"20px"} />
            <p className="text-base font-semibold ">Home</p>
          </Link>
        </li>
        <li>
          <Link href="#" className="flex items-center gap-2">
            <CgShoppingBag size={"20px"} />
            <p className="text-base font-semibold ">Shops</p>
          </Link>
        </li>
        <li>
          {" "}
          <Link href="#" className="flex items-center gap-2">
            <BiCategoryAlt size={"20px"} />
            <p className="text-base font-semibold ">Categories</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SubHeader;
