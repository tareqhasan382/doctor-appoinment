import Image from "next/image";
import React from "react";
import doctor from "../../../assets/dr-man.jpg";

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600 mt-8">
        About the Doctor
      </h1>

      <div className="mt-10 bg-white shadow-md rounded-lg p-8 max-w-2xl">
        <Image
          src={doctor}
          alt="Doctor Profile"
          width={300}
          height={300}
          className="w-40 h-40 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-semibold text-center mt-4">
          Dr. Patrick Harris
        </h2>
        <p className="text-center text-gray-600 mt-2">Gastroenterologist</p>

        <div className="mt-6 text-gray-700 leading-relaxed text-center">
          <p>
            Dr. Patrick Harris has over 15 years of experience in treating
            gastrointestinal disorders. He specializes in the diagnosis and
            treatment of diseases affecting the digestive system, including the
            stomach, esophagus, and intestines.
          </p>
          <p className="mt-4">
            He is committed to providing personalized care, ensuring his
            patients receive the best treatment options available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
