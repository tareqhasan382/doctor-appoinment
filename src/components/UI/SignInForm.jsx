"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
const SignInForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("tareqhasan382@gmail.com");
  const [password, setPassword] = useState("tareqhasan382");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      setLoading(false);

      if (result.error) {
        setLoading(false);
        toast.error("Invalid credentials");
      }
      if (result.ok) {
        toast.success("User loggedIn successfully");
        setLoading(false);
        router.replace("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error("User loggedIn occoer");
    }
  };
  return (
    <div className=" w-[280px] flex flex-col items-start justify-center mt-5 ">
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  items-center justify-center gap-5 "
      >
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
          {loading ? "Signing..." : "Sign-in"}
        </button>
      </form>
      <h3>
        New user ? please{" "}
        <span className=" text-blue-500 underline ">
          <Link href="/sign-up">Sign-up</Link>
        </span>
      </h3>
      <h3>
        Admin user ? please
        <span className=" text-blue-500 underline ">
          <Link href="/admin-signin">Admin-Signin</Link>
        </span>
      </h3>
    </div>
  );
};

export default SignInForm;
