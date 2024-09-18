"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {
  const { data: session } = useSession();
  const [showNav, setShowNav] = useState(false);
  return (
    <div className=" w-full items-center justify-center mx-auto  ">
      <div className=" bg-white text-black py-4 rounded-b-md">
        <ul className="  w-full flex items-center justify-between gap-6 px-4 ">
          <Link href="/">
            <li className=" text-blue-600 text-2xl font-bold uppercase ">
              Doctors
            </li>
          </Link>
          <div className=" max-md:hidden flex items-center flex-row gap-6 ">
            <Link href="/doctors">
              <li className=" hover:text-blue-600 font-normal uppercase ">
                all-dorctors
              </li>
            </Link>

            <Link href="/about">
              <li className=" hover:text-blue-600 font-normal uppercase">
                about
              </li>
            </Link>
            <Link href="/appoinment">
              <li className=" hover:text-blue-600 font-normal uppercase">
                Appoinment
              </li>
            </Link>
            <Link href="/admin">
              <li className=" hover:text-blue-600 font-normal uppercase outline outline-1 outline-gray-400 rounded-full px-3 py-1 ">
                Admin-panel
              </li>
            </Link>
          </div>
          {session?.user ? (
            <li
              onClick={() => signOut()}
              className=" cursor-pointer bg-blue-500 text-white rounded-full py-2 px-3"
            >
              Sign-out
            </li>
          ) : (
            <Link href="/sign-in">
              <li className=" hover:text-red-500 ">Sign-in</li>
            </Link>
          )}
          <span
            onClick={() => setShowNav(!showNav)}
            className=" md:hidden overflow-hidden text-black pr-3 "
          >
            <IoMenuSharp
              size={30}
              className=" cursor-pointer transition ease-in duration-150"
            />
          </span>
        </ul>
      </div>
      <div className=" -top-[80px] ">
        <Sidebar showNav={showNav} setShowNav={setShowNav} />
      </div>
    </div>
  );
};

export default Navbar;
