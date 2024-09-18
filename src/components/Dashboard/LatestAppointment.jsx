import React from "react";
import { connectMongodb } from "../../../lib/mongodb";
import BookingModel from "../../../lib/models/BookingModel";
import FormaDate from "../FormaDate";

const LatestAppointment = async () => {
  await connectMongodb();
  const booking = await BookingModel.find().populate("patient");
  return (
    <div className=" my-6 h-auto outline outline-1 outline-gray-200 rounded-md ">
      <h1 className=" p-5 ">Latest Appointment</h1>
      <div className="  h-[1px] bg-gray-200 "></div>
      {booking.map((book) => (
        <div
          key={book._id}
          className=" w-full flex items-center justify-between p-5 "
        >
          <div className=" flex gap-6 ">
            <div className=" w-14 h-14 rounded-full bg-gray-200 "></div>
            <div>
              <h1>{book?.patient?.name}</h1>
              <FormaDate dateString={book?.date} />
            </div>
          </div>
          <button className=" text-rose-500 w-12 h-12 rounded-full outline outline-1 outline-rose-400 bg-red-100 ">
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default LatestAppointment;
