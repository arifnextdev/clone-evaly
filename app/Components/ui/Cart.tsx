import Image from "next/image";
import Link from "next/link";
import React from "react";

type productsType = {
  id: number;
  title: String;
  img: String;
  price?: number;
  currentprice?: number;
};

const Cart = ({ product }: { product: productsType }) => {
  return (
    product && (
      <>
        <div className="relative md:min-w-[220px] min-w-[180px] max-w-[220px] flex flex-col gap-2 bg-white p-4 rounded-xl border border-gray/50">
          <Link href={"#"} className="">
            <Image
              src={`${product.img}`}
              width={200}
              height={200}
              alt="cartImage"
            />
          </Link>
          <div className="">
            <div className="flex flex-col">
              <span className="text-sm font-medium text-blue-500">
                In Stock
              </span>
              <Link href={"#"} className="">
                <p className="text-md tracking-wider md:text-md line-clamp-3 hover:underline text-blacksm ">
                  {product.title}
                </p>
              </Link>
              <p className="text-md line-through">${product.price}</p>
              <p className="text-lg font-medium">${product.currentprice}</p>
            </div>
          </div>
          <span className="absolute top-0 right-0 mt-4 mr-4 text-xs rounded-lg ">
            <div className="font-[0px] bg-transparent">
              <Image
                src={"https://evaly.com.bd/web-static/images/trending.png"}
                alt={"Trending Now"}
                width={20}
                height={20}
                data-nimg="1"
                className="mx-auto transition-opacity duration-300 ease-in-out
           opacity-100  undefined bg-transparent "
              />
            </div>
          </span>
        </div>
      </>
    )
  );
};

export default Cart;
