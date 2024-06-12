import Image from "next/image";
import ProductSlider from "./ProductSlider";

import { data } from "@/data";
const DealCartSection = () => {
  return (
    <section className="mt-5 bg-gradient-to-r from-indigo-500 to-red-300 p-3 rounded-xl ">
      <div className="flex gap-5 ">
        <Image
          src={
            "https://media.e-valy.com/cms/brands/logo/bd7d55b7-6244-43a9-93c8-b85dfdd7189e"
          }
          width={100}
          height={100}
          alt="img"
        />
        <Image
          src={
            "https://media.e-valy.com/cms/brands/logo/1accd643-c267-45ce-8cf5-0a3f530cc43b"
          }
          width={100}
          height={100}
          alt="img"
        />
      </div>
      {/* <div className="w-full overflow-hidden flex flex-col md:flex-row items-center gap-2.5">
        <DealCart />
      </div> */}

      <ProductSlider products={data} cartStatus="DealCart" />
    </section>
  );
};

export default DealCartSection;
