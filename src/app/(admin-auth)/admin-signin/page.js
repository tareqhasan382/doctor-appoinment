import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AdminSignInForm from "@/components/Dashboard/AdminSignInForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  // if (session?.user) {
  //   return redirect("/admin");
  // }
  return (
    <div className=" w-full flex items-start justify-center ">
      <div className=" bg-white text-black p-10 rounded m-10 ">
        <h1 className=" font-bold text-xl text-center">Admin Sign-in</h1>
        <AdminSignInForm />
      </div>
    </div>
  );
};

export default page;
