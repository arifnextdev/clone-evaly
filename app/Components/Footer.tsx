import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blackmd text-white py-20">
      <div className="wrapper flex flex-col  lg:grid md:grid-cols-4 gap-5 ">
        <div className="flex flex-col gap-2.5">
          <h2 className="text-5xl font-bold">Evaly</h2>
          <p>
            Largest product search engine, maximum categorized online shopping
            mall and quickest home delivery system.
          </p>
          <div className="flex gap-2 items-center">
            <span>Follow Use</span>
            <div className="flex gap-2 items-center">
              <FaFacebook />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-2.5">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>House #8, Road # 14, Dhanmondi, Dhaka-1209.</p>
          <p>Email:support@e-valy.com</p>
        </div>

        <div className=" flex flex-col gap-2.5">
          <h3 className="text-xl font-semibold">Let Us Help You</h3>
          <Link href={"#"}>Your Account</Link>
          <Link href={"#"}>Your Order</Link>
          <Link href={"#"}>Terms & Conditions</Link>
          <Link href={"#"}>Return & Refund Policy FAQ</Link>
        </div>
        <div className="flex flex-col gap-2.5 ">
          <h3 className="text-xl font-semibold">Get Evaly App</h3>
          <Link href={"#"}>
            <Image src={""} width={20} height={10} alt="app" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
