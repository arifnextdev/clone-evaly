import Cart from "@/app/Components/ui/Cart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductSection = () => {
  return (
    <section className="mt-3 border border-gray/50 shadow-lg p-5  rounded-xl">
      <div className="overflow-hidden">
        <div className="flex justify-between items-center gap-2.5 pb-3">
          <h5 className="text-black text-xl font-medium">Products</h5>
          <Link href={"#"} className="py-1.5 px-5 border border-gray rounded-lg hover:bg-black hover:text-white duration-300 font-medium">
            Show more
          </Link>
        </div>

        <div className="grid grid-cols-5 items-center gap-2.5 ">
          <Cart />
          <Cart />
          <Cart />
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

export default ProductSection;
