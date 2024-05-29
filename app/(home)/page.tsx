import React from "react";
import DealCart from "../Components/ui/DealCart";
import DealCartSection from "./_components/DealCartSection";
import FlashSale from "./_components/FlashSale";
import TrendingProduct from "./_components/TrendingProduct";
import CustomSlider from "../Components/slider/Slider";
import ProductSection from "./_components/ProductSection";
import HeroSection from "./_components/HeroSection";

const Home = () => {
  return (
    <main className="wrapper">
      <HeroSection />
      <DealCartSection />
      <FlashSale />
      <TrendingProduct />
      <ProductSection />
    </main>
  );
};

export default Home;
