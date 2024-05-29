import Image from "next/image";
import Link from "next/link";
import React from "react";

const DealCart = () => {
  return (
    <div className="relative min-w-[150px] xl:min-w-[164px] max-w-[160px] flex flex-col gap-2 bg-white p-3 rounded-xl">
      <Link href={"#"} className="">
        <Image
          src={
            "https://media.e-valy.com/cms/products/images/ab065dea-74c0-4684-8a17-ccaf1c177a0c"
          }
          width={200}
          height={200}
          alt="cartImage"
        />
      </Link>
      <div className="">
        <div className="flex flex-col">
          <Link href={"#"} className="">
            <p className="text-sm md:text-sm line-clamp-3 hover:underline text-blacksm ">
              Polyester Rain Coat For Men-Multicolor
            </p>
          </Link>
          <p className="text-base line-through">$720</p>
          <p className="text-lg font-medium">$380</p>
        </div>
        <div className="flex justify-between gap-2 items-center">
          <span className="flex-1 block w-full h-2 rounded-md bg-green-1">
            <span className="to-green-300 bg-[length:150%_150%] via-green-5 from-green-1 bg-gradient-to-r animate-[gradientAnim_5s_ease_infinite] h-2 block rounded-md w-2/3"></span>
          </span>
          <span className="text-[12px]">500pc left</span>
        </div>
      </div>
      <span className="absolute top-[4px] right-[4px] rounded-full bg-white">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-blue-500" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></svg>
      </span>
    </div>
  );
};

export default DealCart;
