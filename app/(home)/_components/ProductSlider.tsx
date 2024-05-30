'use client'
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import DealCart from "@/app/Components/ui/DealCart";

export default function ProductSlider() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <DealCart />
        </SwiperSlide>
        <SwiperSlide>
          <DealCart />
        </SwiperSlide>
        <SwiperSlide>
          <DealCart />
        </SwiperSlide>
        <SwiperSlide>
          <DealCart />
        </SwiperSlide>
        <SwiperSlide>
          <DealCart />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
