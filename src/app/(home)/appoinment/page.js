import Booking from "@/components/UI/Booking";
import React from "react";

const page = () => {
  return (
    <div className=" w-full min-h-screen flex flex-col items-center  ">
      <h1 className=" text-center font-bold my-6 ">My Appointments</h1>
      <div>
        <Booking />
      </div>
    </div>
  );
};

export default page;
