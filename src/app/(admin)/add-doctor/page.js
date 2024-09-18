import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddDoctor from "@/components/Dashboard/AddDoctor";
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
      <h1>Add Doctor</h1>
      <AddDoctor />
    </div>
  );
};

export default page;
