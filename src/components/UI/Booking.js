"use client";
import React, { useEffect, useState } from "react";
import loadingImage from "../../assets/loading.gif";
import Image from "next/image";
import FormaDate from "../FormaDate";
import { BASEURL } from "@/app/(home)/page";
// http://localhost:3000/api/booking
const Booking = () => {
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${BASEURL}/api/booking`, {
          method: "GET",
          credentials: "include",
        });

        if (!res.ok) {
          throw new Error("Unauthorized or failed to fetch bookings");
        }

        const bookingData = await res.json();
        setBooking(bookingData);
        setLoading(false);
        console.log("Booking data:", bookingData);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBooking();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" w-full h-auto flex flex-wrap items-center justify-center mx-auto gap-5 ">
      {loading && (
        <div>
          <Image
            src={loadingImage}
            width={300}
            height={300}
            alt="Loading Image"
            priority
          />
        </div>
      )}
      {booking?.data?.map((appointment) => (
        <div
          key={appointment._id}
          className="w-[300px] h-[300px] outline outline-1 outline-gray-300 rounded-md p-5 items-center "
        >
          <h2>{appointment.doctorName}</h2>
          <FormaDate dateString={appointment.date} />
          <p>Time: {appointment.time}</p>
          <p>Speciality: {appointment.speciality}</p>
          <p>Fees: {appointment.fees}</p>
        </div>
      ))}
    </div>
  );
};

export default Booking;
