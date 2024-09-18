"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import loadingImage from "../../assets/loading.gif";
import axios from "axios";
const DoctorCart = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("/api/doctor");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setError("Failed to load doctors.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className=" w-full flex items-center justify-center ">
      {loading && (
        <div className=" w-full flex items-center justify-center ">
          <Image
            src={loadingImage}
            alt="Loading Image"
            width={300}
            height={500}
          />
        </div>
      )}
      <div className=" w-full flex flex-wrap items-start justify-center gap-5 ">
        {doctors?.data &&
          doctors?.data.map((doctor) => (
            <div
              key={doctor?._id}
              className=" w-[200px] h-[330px] outline outline-1 outline-gray-300 rounded-md hover:-translate-y-2 duration-500 "
            >
              <div className="w-[200px] h-[250px] overflow-hidden ">
                <Image
                  src={doctor?.doctorPicture}
                  alt="doctor-Image"
                  width={300}
                  height={500}
                />
              </div>
              <div className=" w-full flex items-center gap-2 p-2 ">
                <div className=" w-[14px] h-[14px] rounded-full bg-green-500 "></div>
                <h3 className=" text-green-600 ">Available</h3>
              </div>
              <div className=" relative p-2">
                <p className=" absolute -top-3 font-bold ">{doctor?.name}</p>
                <p className=" absolute top-2 text-[14px] ">
                  {doctor?.speciality}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DoctorCart;
