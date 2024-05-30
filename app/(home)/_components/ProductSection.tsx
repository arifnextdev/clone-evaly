import Cart from "@/app/Components/ui/Cart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  {
    id: 9,
    title: "Mini Wireless Keyboard with Touchpad",
    img: "https://media.e-valy.com/cms/products/images/9bfbc392-b0a4-4ed5-8878-7c8383b0343e",
    price: 850,
    currentprice: 799,
  },
  {
    id: 10,
    title: "Electric Handheld Milk Clock Digital Frother",
    img: "https://media.e-valy.com/cms/products/images/85d02fe7-2a8a-4aec-b0c5-34618157fa7f?h=250&w=250",
    price: 2000,
    currentprice: 1799,
  },
];

const ProductSection = () => {
  return (
    <section className="mt-3 border border-gray/50 shadow-lg p-5  rounded-xl">
      <div className="overflow-hidden">
        <div className="flex justify-between items-center gap-2.5 pb-3">
          <h5 className="text-black text-xl font-medium">Products</h5>
          <Link
            href={"#"}
            className="py-1.5 px-5 border border-gray rounded-lg hover:bg-black hover:text-white duration-300 font-medium">
            Show more
          </Link>
        </div>

        <div className="grid grid-cols-5 items-center gap-2.5 ">
          {data && data.map((product) => <Cart key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
