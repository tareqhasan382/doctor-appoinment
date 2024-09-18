import React from "react";
import FormaDate from "../FormaDate";

const Appointments = ({ data, index }) => {
  return (
    <div className=" w-full ">
      <div className=" w-full grid grid-cols-6 items-center justify-between ">
        <h1>{index + 1}</h1>
        <h1>{data?.patient?.name}</h1>
        <h1>{data?.speciality}</h1>
        <FormaDate dateString={data?.date} />
        <h1>{data?.doctorName}</h1>
        <h1>{data?.fees} BDT</h1>
      </div>
    </div>
  );
};

export default Appointments;
