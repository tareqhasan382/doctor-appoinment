"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import loadingImage from "../../assets/loading.gif";
import Image from "next/image";
import Link from "next/link";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "/api/doctor?speciality: selectedSpeciality",
          {
            params: { speciality: selectedSpeciality },
          }
        );
        // const response = await axios.get(
        //   `/api/doctor?speciality=${selectedSpeciality}`
        // );
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setError("Failed to load doctors.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, [selectedSpeciality]);
  const handleSpecialityClick = (speciality) => {
    setSelectedSpeciality(speciality);
  };

  return (
    <div className=" w-full h-auto flex gap-4 my-6 ">
      <div className=" max-md:hidden w-[300px] gap-3 flex flex-col ">
        <button
          onClick={() => handleSpecialityClick("General&physician")}
          className={`w-full text-left p-2 outline outline-1 outline-gray-300 rounded-md ${
            selectedSpeciality === "General physician" ? "bg-gray-200" : ""
          }`}
        >
          General physician
        </button>
        <button
          onClick={() => handleSpecialityClick("Gynecologist")}
          className={`w-full text-left p-2 outline outline-1 outline-gray-300 rounded-md ${
            selectedSpeciality === "Gynecologist" ? "bg-gray-200" : ""
          }`}
        >
          Gynecologist
        </button>
        <button
          onClick={() => handleSpecialityClick("Dermatologist")}
          className={`w-full text-left p-2 outline outline-1 outline-gray-300 rounded-md ${
            selectedSpeciality === "Dermatologist" ? "bg-gray-200" : ""
          }`}
        >
          Dermatologist
        </button>
        <button
          onClick={() => handleSpecialityClick("Pediatricians")}
          className={`w-full text-left p-2 outline outline-1 outline-gray-300 rounded-md ${
            selectedSpeciality === "Pediatricians" ? "bg-gray-200" : ""
          }`}
        >
          Pediatricians
        </button>
        <button
          onClick={() => handleSpecialityClick("Neurologist")}
          className={`w-full text-left p-2 outline outline-1 outline-gray-300 rounded-md ${
            selectedSpeciality === "Neurologist" ? "bg-gray-200" : ""
          }`}
        >
          Neurologist
        </button>
        <button
          onClick={() => handleSpecialityClick("Gastroenterologist")}
          className={`w-full text-left p-2 outline outline-1 outline-gray-300 rounded-md ${
            selectedSpeciality === "Gastroenterologist" ? "bg-gray-200" : ""
          }`}
        >
          Gastroenterologist
        </button>
      </div>
      <div className=" w-full ">
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
                <Link
                  href={`appointment/${doctor?._id}`}
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
                  {doctor?.available ? (
                    <div className=" w-full flex items-center gap-2 p-2 ">
                      <div className=" w-[14px] h-[14px] rounded-full bg-green-500 "></div>
                      <h3 className=" text-green-600 ">Available</h3>
                    </div>
                  ) : (
                    <div className=" p-2 ">
                      <h3 className=" text-gray-400 ">Unavailable</h3>
                    </div>
                  )}
                  <div className=" relative p-2">
                    <p className=" absolute -top-3 font-bold ">
                      {doctor?.name}
                    </p>
                    <p className=" absolute top-2 text-[14px] ">
                      {doctor?.speciality}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
