import Image from "next/image";
import React from "react";
const DoctorCart = ({ doctor }) => {
  console.log("doctor:", doctor);
  return (
    <div className=" w-[226px] h-[297px] rounded-md bg-slate-100 hover:-translate-y-2 duration-500 ">
      <div className=" w-[225px] h-[225px] rounded-t-md overflow-hidden object-cover bg-green-100 ">
        <Image
          src={doctor?.doctorPicture}
          width={300}
          height={300}
          alt="Doctor Image"
          priority
          layout="responsive"
        />
      </div>
      <div className=" w-full flex flex-col items-start justify-center p-3 ">
        <h4 className=" text-[18px] font-bold ">{doctor?.name}</h4>
        <p className=" text-[14px] ">{doctor?.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCart;
