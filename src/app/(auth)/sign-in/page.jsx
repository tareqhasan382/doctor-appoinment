import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignInForm from "@/components/UI/SignInForm";
import { getServerSession } from "next-auth";
import React from "react";
import { redirect } from "next/navigation";
const page = async () => {
  const session = await getServerSession(authOptions);
  // if (session?.user) {
  //   return redirect("/");
  // }
  return (
    <div className=" w-full flex items-start justify-center ">
      <div className=" bg-white text-black p-10 rounded m-10 ">
        <h1 className=" font-bold text-xl text-center">Sign-in</h1>
        <SignInForm />
      </div>
    </div>
  );
};

export default page;
