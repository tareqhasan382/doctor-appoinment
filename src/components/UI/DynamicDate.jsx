"use client";
import React, { useEffect, useState } from "react";

const DynamicDate = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className=" max-md:text-[12px] ">
        Copyright {year} @ Tareq Hasan - All Right Reserved.
      </h1>
    </div>
  );
};

export default DynamicDate;
