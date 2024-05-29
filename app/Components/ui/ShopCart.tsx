import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopCart = () => {
  return (
    <div className="relative min-w-[150px] xl:min-w-[164px] max-w-[160px] py-4 px-4 bg-white flex flex-col gap-2.5 justify-center items-center rounded-lg">
      <div className="">
        <Image
          src={
            "https://media.e-valy.com/cms/brands/logo/3e159d88-d6e2-46e8-9016-4b945385f00b?h=350&w=350"
          }
          width={150}
          height={150}
          alt="img"
        />
      </div>
      <Link href={"#"} className="">
        <p className="text-sm md:text-sm line-clamp-3 hover:underline text-blacksm text-center px-3">
          Samsung Official Store For Flash Sale COD
        </p>
      </Link>
      <span className="absolute top-[4px] right-[4px] rounded-full ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="text-blue-500"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
        </svg>
      </span>
    </div>
  );
};

export default ShopCart;
