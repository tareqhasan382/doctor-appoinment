import BookingModel from "../lib/models/BookingModel";
import DoctorModel from "../lib/models/DoctorModel";
import { connectMongodb } from "../lib/mongodb";

export const getTotalDoctors = async () => {
  await connectMongodb();
  const doctors = await DoctorModel.find();
  const totalDoctors = doctors.length;

  return totalDoctors;
};
export const getTotalAppoinment = async () => {
  await connectMongodb();
  const booking = await BookingModel.find();
  const totalBooking = booking.length;

  return totalBooking;
};
export const getAppoinment = async () => {
  await connectMongodb();
  const booking = await BookingModel.find().populate("patient");
  return booking;
};
