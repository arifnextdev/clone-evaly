"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    id: 1,
    img: "https://media.e-valy.com/cms/banners/b2814fe6-260f-4c36-a3ab-79f0066cdf8e",
  },
  {
    id: 2,
    img: "https://media.e-valy.com/cms/banners/7d2fe3e4-0b36-4d0c-9fd2-8df024098b77",
  },
  {
    id: 3,
    img: "https://media.e-valy.com/cms/banners/f5b4fbef-fd0b-4a68-ba8e-232f8c0d7c26",
  },
  {
    id: 4,
    img: "https://media.e-valy.com/cms/banners/132d1d07-6c62-485e-a2ff-e159a99c62d7",
  },
  {
    id: 5,
    img: "https://media.e-valy.com/cms/banners/b2814fe6-260f-4c36-a3ab-79f0066cdf8e",
  },
  {
    id: 6,
    img: "https://media.e-valy.com/cms/banners/b2814fe6-260f-4c36-a3ab-79f0066cdf8e",
  },
];

export default function HeroSlider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={700}
        loop={true}
        modules={[Pagination]}
        className="mySwiper">
        {data &&
          data.map((item) => (
            <SwiperSlide className="w-full h-full" key={item.id}>
              <Link href={"#"}>
                <Image
                  src={item.img}
                  width={600}
                  height={200}
                  alt="Banner"
                  className="w-full h-full object-cover rounded-xl"
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
