"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = {
        name,
        email,
        password,
      };
      const result = await fetch("api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (result.ok) {
        setLoading(false);
        toast.success("User created successfully");
        router.push("/sign-in", { scroll: false });
      } else if (result.status === 409) {
        setLoading(false);
        toast.warning("User already exist");
      } else {
        setLoading(false);
        toast.error("User created failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  };
  return (
    <div className=" w-[280px] flex flex-col items-start justify-center mt-5 ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  items-center justify-center gap-5 "
      >
        <label>
          Name
          <input
            type="text"
            className=" w-full py-3 px-2 rounded outline outline-1 outline-black "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            className=" w-full py-3 px-2 rounded outline outline-1 outline-black "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            className=" w-full py-3 px-2 rounded outline outline-1 outline-black "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          disabled={loading}
          type="submit"
          className=" w-full py-3 bg-black text-white font-bold rounded "
        >
          {loading ? "Signing..." : "Sign-up"}
        </button>
      </form>
      <h3>
        Already have an ? please{" "}
        <span className=" text-blue-500 underline ">
          <Link href="/sign-in">Sign-in</Link>
        </span>
      </h3>
    </div>
  );
};

export default SignUpForm;
