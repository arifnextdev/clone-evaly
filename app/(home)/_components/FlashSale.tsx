import DealCart from "@/app/Components/ui/DealCart";
import ShopCart from "@/app/Components/ui/ShopCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FlashSale = () => {
  return (
    <section className="mt-3">
      <div className="bg-black rounded-xl pb-3">
        <div className="w-full h-full rounded-t-xl overflow-hidden ">
          <Image
            src={
              "https://media.e-valy.com/cms/campaign/banners/5aa35e43-aafa-426c-80fe-77882cdfe267"
            }
            width={500}
            height={500}
            alt="banner"
            className=" w-full h-full "
          />
        </div>
        <div className="flex justify-between items-center pb-3 px-5">
          <p className="text-lg text-white">Products</p>
          <Link href={"#"} className="py-2 px-5 bg-white rounded-3xl">
            Show more
          </Link>
        </div>
        <div className=" w-full px-5 overflow-hidden  flex flex-col md:flex-row items-center gap-2.5">
          <DealCart />
          <DealCart />
          <DealCart />
          <DealCart />
          <DealCart />
          <DealCart />
          <DealCart />
        </div>
        <div className="flex justify-between items-center pt-7 py-3 px-5">
          <p className="text-lg text-white">Products</p>
          <Link href={"#"} className="py-2 px-5 bg-white rounded-3xl">
            Show more
          </Link>
        </div>
        <div className=" w-full px-5 overflow-hidden  flex flex-col md:flex-row items-center gap-2.5">
          <ShopCart />
          <ShopCart />
          <ShopCart />
          <ShopCart />
          <ShopCart />
          <ShopCart />
          <ShopCart />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
