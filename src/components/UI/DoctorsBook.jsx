import React from "react";
import DoctorCart from "./DoctorCart";

const DoctorsBook = () => {
  return (
    <div className=" bg-white rounded w-full h-full flex flex-col items-center justify-center py-20 gap-6 px-2 ">
      <h1 className=" lg:text-4xl text-3xl font-bold">Top Doctors to Book</h1>
      <p className="">
        {" "}
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className=" w-full flex flex-wrap items-center justify-center gap-6 ">
        <DoctorCart />
      </div>
      <button className=" px-14 py-3 bg-gray-200 rounded-3xl mt-6 font-medium ">
        more
      </button>
    </div>
  );
};

export default DoctorsBook;
