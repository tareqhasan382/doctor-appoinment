import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AllDoctors from "@/components/Dashboard/AllDoctors";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== "admin") {
    return redirect("/sign-in");
  }
  return (
    <div>
      <h1>All Doctors</h1>
      <AllDoctors />
    </div>
  );
};

export default page;
