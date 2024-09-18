"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LiaAngleRightSolid } from "react-icons/lia";
import Link from "next/link";

const Sidebar = ({ showNav, setShowNav }) => {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const menuItems = [
    {
      label: "All Doctors",
      path: "/doctors",
    },

    {
      label: "About",
      path: "/about",
    },
    {
      label: "My Appoinment",
      path: "/appoinment",
    },
    {
      label: "Admin Panel",
      path: "/admin",
    },
  ];

  return (
    <div
      className={`fixed top-0 text-black ${
        showNav ? "left-0" : "-left-[105%]"
      } h-screen w-screen bg-black bg-opacity-60 z-50 pb-6 flex flex-col justify-between md:hidden`}
    >
      <div
        className={`fixed top-0 z-50 text-black ${
          showNav ? "left-0" : "-left-[100%]"
        } h-full w-[75%] overflow-y-scroll no-scrollbar bg-white z-50 transition-all duration-500 pb-6 flex flex-col justify-between md:hidden`}
      >
        <div className="w-full flex flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-between text-xl font-bold p-6">
            <div></div>
            <AiOutlineClose
              color="black"
              onClick={() => setShowNav(!showNav)}
              size={30}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full h-[1px] bg-slate-200"></div>

          {/* Navigation Menu */}
          <nav>
            <div className="space-y-4 pl-3 pt-4 z-30">
              {menuItems.map((menu, index) => (
                <div key={index} className="relative group">
                  {menu.path ? (
                    <Link
                      href={menu.path}
                      onClick={() => setShowNav(false)}
                      className="w-full text-left flex justify-between items-center pr-4"
                    >
                      <span
                        className={`${
                          menu.label === "Sale" ? "text-red-500" : ""
                        }`}
                      >
                        {menu.label}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => toggleMenu(menu.label)}
                      className="w-full text-left flex justify-between items-center pr-4"
                    >
                      <span>{menu.label}</span>
                      {menu.submenu && (
                        <LiaAngleRightSolid
                          size={20}
                          className={`transform transition-transform ${
                            openMenu === menu.label ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </button>
                  )}

                  {openMenu === menu.label && menu.submenu && (
                    <div className="mt-2 space-y-2 bg-slate-200 -ml-3">
                      {menu.submenu.map((submenu, subIndex) => (
                        <div key={subIndex} className="pl-5 hover:bg-gray-400">
                          <Link
                            href={submenu.path}
                            onClick={() => setShowNav(false)}
                            className="block p-2 rounded-md capitalize"
                          >
                            {submenu.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="w-full h-[1px] bg-slate-200 mt-4"></div>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <div className="w-full h-[1px] bg-slate-200"></div>
        <div className="pl-3">
          <p className=" text-[10px] ">
            Copyright 2024 @ Tareq Hasan - All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
