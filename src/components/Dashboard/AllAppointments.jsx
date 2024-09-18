import React from "react";
import Appointments from "./Appointments";
import { connectMongodb } from "../../../lib/mongodb";
import BookingModel from "../../../lib/models/BookingModel";

const AllAppointments = async () => {
  await connectMongodb();
  const booking = await BookingModel.find().populate("patient");
  // console.log("booking:", booking);
  return (
    <div className=" w-full h-auto outline outline-1 outline-gray-200 rounded-md  ">
      <div className=" w-full grid grid-cols-6 items-center justify-between p-5">
        <h1>#</h1>
        <h1>Patient</h1>
        <h1>Department</h1>

        <h1>Date & Time</h1>
        <h1>Doctor</h1>
        <h1>Fees</h1>
      </div>
      <div className=" w-full h-[1px] bg-gray-200 "></div>
      <div className=" w-full p-5 ">
        {booking.map((book, index) => (
          <Appointments key={book._id} data={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
