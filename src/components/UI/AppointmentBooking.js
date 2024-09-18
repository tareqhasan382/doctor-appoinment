"use client";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import CreateTimeSlots from "../Dashboard/CreateTimeSlots";
import { toast } from "react-toastify";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const timeSlotsByDay = {
  0: ["11:00 AM", "12:00 PM", "01:00 PM"], // Sunday
  1: ["09:00 AM", "10:00 AM", "11:00 AM"], // Monday
  2: ["10:00 AM", "12:00 PM", "02:00 PM"], // Tuesday
  3: ["11:00 AM", "01:00 PM", "03:00 PM"], // Wednesday
  4: ["10:00 AM", "12:00 PM", "01:00 PM"], // Thursday
  5: ["09:00 AM", "11:00 AM", "01:00 PM"], // Friday
  6: ["11:00 AM", "01:00 PM", "03:00 PM"], // Saturday
};

const AppointmentBooking = ({ doctor }) => {
  const router = useRouter();
  const { data: session } = useSession();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  const minDate = new Date();
  const maxDate = dayjs(minDate).add(10, "day").toDate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSlotClick = (slot) => {
    setSelectedTime(slot);
  };

  const handleBooking = async () => {
    if (!session?.user) {
      return router.push("/sign-in");
    }
    if (!selectedDate || !selectedTime) {
      return toast.error("Please select a date and time.");
    }
    const newBooking = {
      date: selectedDate,
      time: selectedTime,
      doctorName: doctor?.name,
      speciality: doctor?.speciality,
      fees: doctor?.fees,
      patient: session?.user?._id,
    };

    try {
      const response = await axios.post("/api/booking", newBooking);
      if (response?.data?.success) {
        toast.success("Boooking Successfully!");
        router.push("/appoinment");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
    setSelectedDate(null);
    setSelectedTime("");
  };

  const availableTimeSlots = selectedDate
    ? timeSlotsByDay[dayjs(selectedDate).day()] || []
    : [];

  return (
    <div className=" w-full flex flex-col items-center ">
      <h2 className=" text-xl font-bold ">Appointment Booking</h2>

      <div className=" my-5 ">
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          minDate={minDate}
          maxDate={maxDate}
          inline
        />
      </div>

      <div className="flex gap-4 my-5">
        {availableTimeSlots.map((slot) => (
          <button
            key={slot}
            className={`px-4 py-2 rounded-3xl outline outline-1 outline-gray-400 ${
              selectedTime === slot ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleTimeSlotClick(slot)}
          >
            {slot}
          </button>
        ))}
      </div>

      <button
        onClick={handleBooking}
        className="mt-4 px-10 py-3 rounded-3xl bg-blue-500 text-white"
      >
        Book an Appointment
      </button>
      {/* <div>
        <CreateTimeSlots />
      </div> */}
    </div>
  );
};

export default AppointmentBooking;
