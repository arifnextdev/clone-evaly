import React from "react";
import HeroSlider from "./HeroSlider";
import Image from "next/image";
import Campaing from "./Campaing";

const HeroSection = () => {
  return (
    <section className=" flex flex-col  lg:grid grid-cols-6 gap-2.5 w-full ">
      <div className="col-span-4 rounded-xl overflow-hidden">
        <HeroSlider />
      </div>
      <div className="col-span-2 h-[380px] bg-gray rounded-xl p-5 overflow-hidden ">
        <h3 className="py-2">Upcoming Campaigns</h3>
        <div className="h-full overflow-y-scroll scroll-smooth">
          <div className="pt-3 flex flex-col gap-2.5  ">
            <Campaing />
            <Campaing />
            <Campaing />
            <Campaing />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
