import DealCart from "@/app/Components/ui/DealCart";
import ShopCart from "@/app/Components/ui/ShopCart";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductSlider from "./ProductSlider";

const data = [
  {
    id: 1,
    title: "Portable Mini Water Air Cooler Table Fan - 10W",
    img: "https://media.e-valy.com/cms/products/images/03b04398-2830-44e7-b7d1-56be656bb9b0?h=250&w=250",
    price: 443,
    currentprice: 2233,
  },
  {
    id: 2,
    title: "Wireless Bluetooth Earbuds with Charging Case",
    img: " https://media.e-valy.com/cms/products/images/03b04398-2830-44e7-b7d1-56be656bb9b0?h=250&w=250",
    price: 1200,
    currentprice: 999,
  },
  {
    id: 3,
    title: "Smart Fitness Band with Heart Rate Monitor",
    img: "https://media.e-valy.com/cms/products/images/9bfbc392-b0a4-4ed5-8878-7c8383b0343e",
    price: 1500,
    currentprice: 1299,
  },
  {
    id: 4,
    title: "Portable USB Rechargeable LED Desk Lamp",
    img: "https://media.e-valy.com/cms/products/images/6589cf1d-d074-4fd5-ac66-95f1ea7d1a27?h=250&w=250",
    price: 700,
    currentprice: 599,
  },
  {
    id: 5,
    title: "Mini Wireless Keyboard with Touchpad",
    img: "https://media.e-valy.com/cms/products/images/9bfbc392-b0a4-4ed5-8878-7c8383b0343e",
    price: 850,
    currentprice: 799,
  },
  {
    id: 6,
    title: "Electric Handheld Milk Clock Digital Frother",
    img: "https://media.e-valy.com/cms/products/images/85d02fe7-2a8a-4aec-b0c5-34618157fa7f?h=250&w=250",
    price: 2000,
    currentprice: 1799,
  },
  {
    id: 7,
    title: "Digital Alarm Clock with FM Radio",
    img: "https://media.e-valy.com/cms/products/images/8ec3f1ba-320c-4fdc-a0e8-e11933b731cf?h=250&w=250",
    price: 900,
    currentprice: 850,
  },
  {
    id: 8,
    title: "Electric Handheld Milk Frother",
    img: "https://media.e-valy.com/cms/products/images/7600f06e-d71f-4592-a812-54a015d15cb4?h=250&w=250",
    price: 500,
    currentprice: 450,
  },
];

const data2 = [
  {
    id: 1,
    img: "https://media.e-valy.com/cms/brands/logo/3e159d88-d6e2-46e8-9016-4b945385f00b?h=350&w=350",
    title: "Samsung Official Store For Flash Sale COD",
  },
  {
    id: 2,
    img: "https://media.e-valy.com/cms/brands/logo/dc7f6f7c-a4c1-4580-892a-8fe6959a6ec2?h=350&w=350",
    title: "Apple Authorized Reseller",
  },
  {
    id: 3,
    img: "https://media.e-valy.com/cms/brands/logo/0da6526c-658e-4bdf-abd1-1ef1d1caa11e?h=350&w=350",
    title: "Reseller Store Xiaomi Exclusive",
  },
  {
    id: 4,
    img: "https://media.e-valy.com/cms/brands/logo/843804ae-3a37-433d-9e01-137bbec9a48e?h=350&w=350",
    title: "OnePlus  Store Exclusive Official",
  },
  {
    id: 5,
    img: "https://media.e-valy.com/cms/brands/logo/ea335862-faaf-4b5b-a627-82f77b7e1b82?h=350&w=350",
    title: "Official Sony Authorized Dealer",
  },
  {
    id: 6,
    img: "https://media.e-valy.com/cms/brands/logo/843804ae-3a37-433d-9e01-137bbec9a48e?h=350&w=350",
    title: "Authorized LG Electronics Official",
  },
  {
    id: 7,
    img: "https://media.e-valy.com/cms/brands/logo/843804ae-3a37-433d-9e01-137bbec9a48e?h=350&w=350",
    title: "Reseller Store Xiaomi Exclusive",
  },
  {
    id: 8,
    img: "https://media.e-valy.com/cms/brands/logo/0da6526c-658e-4bdf-abd1-1ef1d1caa11e?h=350&w=350",
    title: "Reseller Store Xiaomi Exclusive",
  },
  {
    id: 9,
    img: "https://media.e-valy.com/cms/brands/logo/ea335862-faaf-4b5b-a627-82f77b7e1b82?h=350&w=350",
    title: "Vivo Official Partner",
  },
  {
    id: 10,
    img: "https://media.e-valy.com/cms/brands/logo/843804ae-3a37-433d-9e01-137bbec9a48e?h=350&w=350",
    title: "Nokia Exclusive Distributor",
  },
];

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
          <Link href={"#"} className="py-1.5 px-5 bg-white rounded-3xl">
            Show more
          </Link>
        </div>
        <div className=" w-full px-5 overflow-hidden  flex flex-col md:flex-row items-center gap-2.5">
          <ProductSlider products={data} cartStatus="DealCart" />
        </div>
        <div className="flex justify-between items-center pt-7 py-3 px-5">
          <p className="text-lg text-white">Shops</p>
          <Link href={"#"} className="py-1.5 px-5 bg-white rounded-3xl">
            Show more
          </Link>
        </div>
        <div className=" w-full px-5 overflow-hidden">
          <ProductSlider products={data2} cartStatus="shopCart" />
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
