import Cart from "@/app/Components/ui/Cart";
import Image from "next/image";
import React from "react";

const TrendingProduct = () => {
  return (
    <section className="mt-3 border border-gray/50 shadow-lg p-5  rounded-xl">
      <div className="overflow-hidden">
        <div className="flex items-center gap-2.5 pb-3">
          <Image
            src={"https://evaly.com.bd/web-static/images/trending.png"}
            width={20}
            height={20}
            alt="Trending Now"
          />
          <h5 className="text-black text-xl font-medium">Trending Now</h5>
        </div>

        <div className="flex items-center gap-2.5 ">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </section>
  );
};

export default TrendingProduct;
