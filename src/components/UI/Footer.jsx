import React from "react";
import DynamicDate from "./DynamicDate";

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:px-20 py-4 px-3 ">
      <div className=" w-full grid lg:grid-cols-3 grid-cols-1 justify-between pt-20 gap-4 ">
        <div className="  ">
          <h1 className=" text-blue-300 text-3xl font-bold my-3 ">Doctors</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="  w-full flex lg:flex-col items-center  ">
          <div className="  ">
            <h1 className=" text-lg font-semibold my-3">COMPANY</h1>
            <p>Home</p>
            <p>About us</p>
            <p>Delivery</p>
            <p>Privacy policy</p>
          </div>
        </div>
        <div className=" w-full  ">
          <h1 className=" text-lg font-semibold my-3">GET IN TOUCH</h1>
          <p>+0-000-000-000</p>
          <p>tareqhasan382@gmail.com</p>
        </div>
      </div>
      <div className=" w-full text-center mt-10 ">
        <DynamicDate />
      </div>
    </footer>
  );
};

export default Footer;
