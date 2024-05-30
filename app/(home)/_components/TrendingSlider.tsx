"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";
import DealCart from "@/app/Components/ui/DealCart";
import Cart from "@/app/Components/ui/Cart";


type productsType = {
  id: number;
  title: String;
  img: String;
  price?: number;
};

export default function TrendingSlider({
  products,
}: {
  products: productsType[];
}) {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              {<Cart product={product} />}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
