"use client";
import React, { useEffect, useState } from "react";
import DoctorCart from "../Dashboard/DoctorCart";
import axios from "axios";
import loadingImage from "../../assets/loading.gif";
import Image from "next/image";
const AllDoctors = () => {
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
    <div className=" my-6 flex flex-wrap gap-5 ">
      {loading && (
        <div>
          <Image
            src={loadingImage}
            width={400}
            height={400}
            alt="Loading Image"
            priority
            layout="responsive"
            className=" w-auto h-auto "
          />
        </div>
      )}
      {!loading &&
        !error &&
        doctors?.data &&
        doctors?.data.map((doctor) => (
          <DoctorCart key={doctor?._id} doctor={doctor} />
        ))}
    </div>
  );
};

export default AllDoctors;
