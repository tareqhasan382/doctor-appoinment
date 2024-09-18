import Doctors from "@/components/UI/Doctors";
import React from "react";

const page = async () => {
  return (
    <div className=" w-full h-[80%] flex items-start justify-center ">
      <div className=" w-full ">
        <div className=" w-full h-full bg-white ">
          <h1 className=" text-center ">
            Browse through the doctors specialist.
          </h1>
        </div>
        <div className=" w-full h-full "></div>
        <Doctors />
      </div>
    </div>
  );
};

export default page;
