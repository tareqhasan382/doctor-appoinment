"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AdminNavbar = () => {
  return (
    <div className=" w-full flex items-center justify-between py-3 lg:px-20">
      <Link href="/admin">
        <button className=" text-lg font-bold capitalize ">
          Dashboard Panel
        </button>
      </Link>
      <button
        onClick={() => signOut()}
        className=" w-28 h-12 bg-blue-500 text-white rounded-full "
      >
        Log out
      </button>
    </div>
  );
};

export default AdminNavbar;
