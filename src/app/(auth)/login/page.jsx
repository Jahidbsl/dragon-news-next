"use client";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeClosed } from "lucide-react";
import { register } from "next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isShowPass, SetIsShowPass] = useState(false);
  const handleSubmitfanc = async (data) => {
    const { name, email, image, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      callbackURL: "/",
      rememberMe: true,
    });
    if (error) {
      alert(error.message);
    } else {
      alert("Successfully Ligin");
    }
  };
  return (
    <div className="max-w-7xl min-h-[80vh] mx-auto p-4 bg-slate-200 flex justify-center items-center mt-4">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-bold text-3xl text-center">Login your account</h2>
        <form className="mt-6" onSubmit={handleSubmit(handleSubmitfanc)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email must me required" })}
              id="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-700">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type={isShowPass ? "text" : "password"}
              {...register("password", {
                required: "Password must me required",
              })}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-2 top-10 "
              onClick={() => SetIsShowPass(!isShowPass)}
            >
              {" "}
              {isShowPass ? <Eye></Eye> : <EyeClosed></EyeClosed>}
            </span>
            {errors.password && (
              <p className="text-red-700">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-2 rounded-md hover:bg-slate-800 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
