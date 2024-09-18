import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    doctorPicture: {
      type: String,
    },
    speciality: {
      type: String,
    },
    degree: {
      type: String,
    },
    address: {
      type: String,
    },
    experience: {
      type: String,
    },
    fees: {
      type: String,
    },
    aboutDoctor: {
      type: String,
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const DoctorModel =
  mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
export default DoctorModel;
