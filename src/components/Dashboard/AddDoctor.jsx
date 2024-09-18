"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASEURL } from "@/app/(home)/page";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    speciality: "",
    email: "",
    degree: "",
    password: "",
    address: "",
    experience: "",
    fees: "",
    aboutDoctor: "",
    doctorPicture: "",
  });
  const [uploading, setUploading] = useState(false);
  const [adloading, setAdloading] = useState(false);

  // Handle input field changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload to Cloudinary
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploading(true);

      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`;

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

      try {
        const response = await axios.post(url, formData, {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        });

        const imageUrl = response.data.secure_url;

        setFormData((prevData) => ({
          ...prevData,
          doctorPicture: imageUrl,
        }));

        toast.success("Image uploaded successfully");
      } catch (error) {
        toast.error("Failed uploading image");
        console.error("Error uploading image:", error);
      } finally {
        setUploading(false);
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setAdloading(true);
    const response = await fetch(`${BASEURL}/api/doctor`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setAdloading(false);
      toast.success("Saved Doctor Successfully");
      // router.push("/admin/products");
    } else {
      setAdloading(false);
      toast.error("Doctor Saved Failed");
    }
  };

  return (
    <div className="w-full h-auto outline outline-1 outline-gray-200 rounded-md p-5 my-6">
      <form className="w-full h-auto" onSubmit={handleSubmit}>
        <div className="flex items-center gap-2">
          <label
            disabled={uploading}
            className="w-14 h-14 rounded-full bg-gray-200 cursor-pointer flex text-center items-center justify-center text-2xl"
          >
            +
            <input type="file" hidden onChange={handleFileChange} />
          </label>
          <span className="capitalize">Upload doctor picture</span>
        </div>

        {uploading && (
          <p className=" font-bold text-rose-200 ">Uploading image...</p>
        )}

        <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-5 my-5">
          <label className="flex flex-col">
            Doctor name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            Speciality
            <select
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            >
              <option value="">--select speciality--</option>
              <option value="General&physician">General physician</option>
              <option value="Gynecologist">Gynecologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Pediatricians">Pediatricians</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Gastroenterologist">Gastroenterologist</option>
            </select>
          </label>

          <label className="flex flex-col">
            Doctor Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            Degree
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            Set Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            Experience
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            Fees
            <input
              type="number"
              name="fees"
              value={formData.fees}
              onChange={handleChange}
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>

          <label className="flex flex-col">
            About Doctor
            <textarea
              name="aboutDoctor"
              value={formData.aboutDoctor}
              onChange={handleChange}
              placeholder="Write about doctor"
              className="p-3 outline outline-1 outline-gray-300 rounded-md"
            />
          </label>
        </div>

        <button
          disabled={adloading || uploading}
          type="submit"
          className="px-8 py-3 rounded-3xl bg-blue-500 text-white my-5"
        >
          {adloading ? "Saving ..." : "Add Doctor"}
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
