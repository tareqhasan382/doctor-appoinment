import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LatestAppointment from "@/components/Dashboard/LatestAppointment";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import React from "react";
import {
  getTotalAppoinment,
  getTotalDoctors,
} from "../../../../actions/actions";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") {
    return redirect("/sign-in");
  }

  return (
    <div className=" w-full gap-5">
      <div className="w-full flex gap-5 ">
        <div className=" w-[244px] h-[115px] outline outline-1 outline-gray-300 rounded-md flex flex-col items-center justify-center ">
          <h1 className=" font-bold text-2xl ">{getTotalDoctors()}</h1>
          <h1>Doctors</h1>
        </div>
        <div className=" w-[244px] h-[115px] outline outline-1 outline-gray-300 rounded-md flex flex-col items-center justify-center">
          <h1 className=" font-bold text-2xl ">{getTotalAppoinment()}</h1>
          <h1>Appoinments</h1>
        </div>
        <div className=" w-[244px] h-[115px] outline outline-1 outline-gray-300 rounded-md flex flex-col items-center justify-center">
          <h1 className=" font-bold text-2xl ">{getTotalAppoinment()}</h1>
          <h1>Patients</h1>
        </div>
      </div>
      <LatestAppointment />
    </div>
  );
};

export default page;
