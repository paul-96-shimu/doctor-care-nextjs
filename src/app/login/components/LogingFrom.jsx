
"use client"

import React from 'react'
import { signIn } from "next-auth/react"

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';



export default function LogInFrom() {

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    toast("Logging in...")

    try {
     const response = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false })

     if (response.ok) {
       toast.success("Login successful!")
       router.push("/")
       form.reset()
     } else{
        toast.error("Login failed")
     }
     
      // console.log({email,password})
    } catch (error) {
      console.log(error)
      alert("Login failed")
    }




  }
  return (
    <div>


      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          LogIn
        </button>
      </form>
      <div className="flex items-center justify-between my-4">
        <span className="w-1/3 border-b"></span>
        <span className="text-gray-500 text-sm">Or</span>
        <span className="w-1/3 border-b"></span>
      </div>

      <div className="space-y-3">
        <button

          className="w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-100"
        >
          <FcGoogle size={20} /> Continue with Google
        </button>
        <button

          className="w-full flex items-center justify-center gap-2 border p-2 rounded-lg hover:bg-gray-100"
        >
          <FaGithub size={20} /> Continue with GitHub
        </button>
      </div>
    </div>
  )
}
