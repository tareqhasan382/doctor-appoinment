"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateTimeSlots = () => {
  const [day, setDay] = useState("");
  const [times, setTimes] = useState([]);
  const [newTime, setNewTime] = useState("");

  const handleChange = (e) => {
    setDay(e.target.value);
  };
  const handleAddTimeSlot = async () => {
    try {
      const response = await axios.post("/api/timesolt", { day, times });
      if (response?.data) {
        toast.success("Time slot created successfully");
      }
    } catch (error) {
      console.error("Failed to create time slot:", error);
    }
  };

  return (
    <div className=" flex flex-col gap-5 ">
      <h2>Admin Time Slot Management</h2>

      <div className=" flex gap-2 items-center ">
        <label>Day:</label>
        <select
          name="speciality"
          value={day}
          onChange={handleChange}
          className=" py-2 px-4 outline outline-1 outline-gray-400 rounded-md "
        >
          <option value="">--Select Day--</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </div>
      <div className=" flex gap-2 items-center ">
        <label>Time:</label>
        <input
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && newTime) {
              setTimes([...times, newTime]);
              setNewTime("");
            }
          }}
          className=" p-2 outline outline-1 outline-gray-400 rounded-md "
          placeholder="11:00 PM"
        />
      </div>

      <div className=" my-3 ">
        <button
          onClick={handleAddTimeSlot}
          className=" px-6 py-2 bg-blue-500 rounded-3xl text-white "
        >
          Add Time Slot
        </button>
      </div>
    </div>
  );
};

export default CreateTimeSlots;
