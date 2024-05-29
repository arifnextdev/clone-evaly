import Image from "next/image";
import React from "react";

const Campaing = () => {
  return (
    <div className="grid grid-cols-2 gap-2 items-center bg-white p-3 rounded-xl">
      <div className="flex flex-col items-center">
        <Image
          src={"https://evaly.com.bd/web-static/images/happyhour.png"}
          width={200}
          height={7}
          alt="img"
        />
        <p className="text-sm text-rose-500">Campaign Starts in</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <p className="bg-black text-white text-center py-2.5 rounded-lg text-lg font-medium">
          1d
        </p>
        <p className="bg-black text-white text-center py-2.5 rounded-lg text-lg font-medium">
          21h
        </p>
        <p className="bg-black text-white text-center py-2.5 rounded-lg text-lg font-medium">
          16m
        </p>
        <p className="bg-black text-white text-center py-2.5 rounded-lg text-lg font-medium">
          10s
        </p>
      </div>
    </div>
  );
};

export default Campaing;
