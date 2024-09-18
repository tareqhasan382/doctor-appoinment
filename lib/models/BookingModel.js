import mongoose from "mongoose";
const bookingSchema = new mongoose.Schema(
  {
    doctorName: {
      type: String,
      required: true,
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    speciality: {
      type: String,
      required: true,
    },
    fees: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BookingModel =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
export default BookingModel;
