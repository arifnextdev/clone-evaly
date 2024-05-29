import React from "react";
import HeroSlider from "./HeroSlider";
import Image from "next/image";
import Campaing from "./Campaing";

const HeroSection = () => {
  return (
    <section className="mt-3 grid grid-cols-6 gap-2.5 w-full ">
      <div className="col-span-4 rounded-xl overflow-hidden">
        <HeroSlider />
      </div>
      <div className="col-span-2 h-[380px] bg-gray rounded-xl p-5 overflow-hidden overflow-y-scroll scroll-smooth">
        <h3>Upcoming Campaigns</h3>
        <div className="pt-3 flex flex-col gap-2.5">
          <Campaing />
          <Campaing />
          <Campaing />
          <Campaing />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
