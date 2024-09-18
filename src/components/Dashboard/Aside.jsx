"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";
const Aside = () => {
  const pathname = usePathname();

  return (
    <div className=" w-[350px] h-auto flex flex-col items-start py-5 ">
      <Link
        href="/admin"
        className={`w-full h-[40px]   ${
          pathname === "/admin" &&
          " w-full h-[40px] flex justify-between bg-gray-300"
        }`}
      >
        <button className="lg:pl-20">Dashboard</button>
        {pathname === "/admin" && (
          <div className=" w-[4px] h-[40px] bg-blue-500 "></div>
        )}
      </Link>
      <Link
        href="/appoinments"
        className={`w-full h-[40px] ${
          pathname === "/appoinments" &&
          " w-full h-[40px] flex justify-between bg-gray-300"
        }`}
      >
        <button className="lg:pl-20">Appoinments</button>
        {pathname === "/appoinments" && (
          <div className=" w-[4px] h-[40px] bg-blue-500 "></div>
        )}
      </Link>
      <Link
        href="/add-doctor"
        className={`w-full h-[40px] flex items-center ${
          pathname === "/add-doctor" &&
          " w-full h-[40px] flex justify-between bg-gray-300"
        }`}
      >
        <button className="lg:pl-20">Add Doctor</button>
        {pathname === "/add-doctor" && (
          <div className=" w-[4px] h-[40px] bg-blue-500 "></div>
        )}
      </Link>
      <Link
        href="/doctor-list"
        className={`w-full h-[40px] flex items-center ${
          pathname === "/doctor-list" &&
          " w-full h-[40px] flex justify-between bg-gray-300"
        }`}
      >
        <button className="lg:pl-20">Doctors List</button>
        {pathname === "/doctor-list" && (
          <div className=" w-[4px] h-[40px] bg-blue-500 "></div>
        )}
      </Link>
    </div>
  );
};

export default Aside;
