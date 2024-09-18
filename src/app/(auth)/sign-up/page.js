import SignUpForm from "@/components/UI/SignUpForm";
import React from "react";

const page = () => {
  return (
    <div className=" w-full flex items-start justify-center ">
      <div className=" bg-white text-black p-10 rounded m-10 ">
        <h1 className=" font-bold text-xl text-center">Sign-up </h1>
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
