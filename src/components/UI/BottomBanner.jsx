import Image from "next/image";
import React from "react";
import appointment_img from "../../assets/appointment_img.png";
// max-md:landscape:h-[405px] md:portrait:h-[405px]
const BottomBanner = () => {
  return (
    <div className=" bg-blue-500 rounded w-full h-[315px] flex items-center justify-center py-20 gap-6 my-5 lg:px-20 px-4 ">
      <div className=" lg:w-1/2 w-full ">
        <h1 className=" font-bold lg:text-4xl text-xl ">Book Appointment</h1>
        <h1 className=" font-bold lg:text-4xl text-xl ">
          With 100+ Trusted Doctors
        </h1>
        <button className=" px-8 py-3 bg-white text-black font-semibold rounded-3xl mt-6 ">
          Create account
        </button>
      </div>
      <div className=" max-md:hidden lg:w-1/2 md:w-full h-full relative  ">
        <div className=" absolute w-full h-auto flex justify-end -top-24 ">
          <Image
            src={appointment_img}
            alt="appointment_img.png"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
