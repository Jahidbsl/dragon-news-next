"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";

const RightSidebar = () => {
  const handelGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
   
  };
   const handelGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
   
  };
  return (
    <aside className="col-span-1 md:col-span-3 space-y-6">
      <h2 className="text-xl font-bold text-gray-800 mb-5">Login With</h2>
      <div className="flex flex-col gap-3">
        {/* Mock Buttons for Design */}
        <button
          onClick={handelGoogleSignin}
          className="w-full py-2.5 px-4 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Login with Google
        </button>
        <button
        onClick={handelGithubSignin}
        className="w-full py-2.5 px-4 border-2 border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
          Login with Github
        </button>
      </div>

      <div className="pt-4">
        <h2 className="text-xl font-bold text-gray-800 mb-5">Find Us On</h2>
        <div className="border border-gray-200 rounded-lg divide-y">
          <div className="p-4 flex items-center gap-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            Facebook
          </div>
          <div className="p-4 flex items-center gap-3 text-gray-600 hover:text-sky-400 cursor-pointer">
            Twitter
          </div>
          <div className="p-4 flex items-center gap-3 text-gray-600 hover:text-pink-600 cursor-pointer">
            Instagram
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
