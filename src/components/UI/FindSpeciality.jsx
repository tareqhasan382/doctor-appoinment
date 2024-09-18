import React from "react";
import CategoryCart from "./CategoryCart";
import Gastroenterologist from "../../assets/Gastroenterologist.svg";
import Gynecologis from "../../assets/Gynecologis.svg";
import Neurologist from "../../assets/Neurologist.svg";
import Pediatricians from "../../assets/Pediatricians.svg";
//General physician
//Gynecologist
//Dermatologist
//Pediatricians
//Neurologist
//Gastroenterologist

const FindSpeciality = () => {
  return (
    <div className=" bg-white rounded w-full h-full flex flex-col items-center justify-center py-20 gap-6 my-4 ">
      <h1 className=" text-4xl font-bold ">Find by Speciality</h1>
      <p className=" lg:w-1/3 text-center ">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className=" w-full h-auto flex flex-wrap items-center justify-center gap-4 pt-6">
        <CategoryCart name="General physician" />
        <CategoryCart img={Gynecologis} name="Gynecologist" />
        <CategoryCart name="Dermatologist" />
        <CategoryCart img={Neurologist} name="Neurologist" />
        <CategoryCart img={Gastroenterologist} name="Gastroenterologist" />
        <CategoryCart img={Pediatricians} name="Pediatricians" />
      </div>
    </div>
  );
};

export default FindSpeciality;
