"use client";

import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react"; // <-- এটা অবশ্যই দরকার
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SocialLogin() {
  const router = useRouter()
  const session = useSession()
  const handleSocialLogin = (providerName) => {


    signIn(providerName);

  };


  useEffect(()=>{
    if (session?.status === "authenticated") {
      router.push("/")
      toast("Already logged in successfully")
    }
  }, [session?.status])

  return (
    <div className="space-y-3">
      <button
        onClick={() => handleSocialLogin("google")}
        className="w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-100"
      >
        <FcGoogle size={20} /> Continue with Google
      </button>

      <button
        onClick={() => handleSocialLogin("github")}
        className="w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-100"
      >
        <FaGithub size={20} /> Continue with GitHub
      </button>
    </div>
  );
}
