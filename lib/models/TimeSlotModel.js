//TimeSlotModel.js
import mongoose from "mongoose";

const TimeSlotSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
      enum: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    times: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);
const TimeSlotModel =
  mongoose.models.TimeSlot || mongoose.model("TimeSlot", TimeSlotSchema);
export default TimeSlotModel;
