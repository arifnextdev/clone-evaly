import React from "react";
import DealCart from "../Components/ui/DealCart";
import DealCartSection from "./_components/DealCartSection";
import FlashSale from "./_components/FlashSale";
import TrendingProduct from "./_components/TrendingProduct";
import ProductSection from "./_components/ProductSection";
import HeroSection from "./_components/HeroSection";
import ProductSlider from "./_components/ProductSlider";

const Home = () => {
  return (
    <main className="wrapper mt-36 z-10">
      <HeroSection />
      <DealCartSection />
      <FlashSale />
      <TrendingProduct />
      <ProductSection />
    </main>
  );
};

export default Home;
