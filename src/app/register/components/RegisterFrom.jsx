
"use client"

import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { registerUser } from '@/app/actions/auth/registeruser';

export default function RegisterFrom() {

    const handleSubmit=async(e)=>{
          e.preventDefault();
        const form =e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;

        await registerUser({name,email,password})

    }
  return (
    <div>
      

            <form onSubmit={handleSubmit}  className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full p-2 border rounded-lg"
          />
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
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Register
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
