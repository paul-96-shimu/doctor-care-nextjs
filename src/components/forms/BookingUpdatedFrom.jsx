"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function BookingUpdatedForm({ data }) {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    address: "",
    amount: "",
    date: "",
    phone: "",
    service_id: "",
    service_title: "",
    service_price: "",
    service_img: "",
  });

  // data আসার পর একবার state update
  useEffect(() => {
    if (data) {
      setFormData({
        address: data?.address || "",
        amount: data?.amount || data?.price || "",
        date: data?.date || "",
        phone: data?.phone || "",
        service_id: data?._id,
        service_title: data?.title,
        service_price: data?.price,
        service_img: data?.img,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = {
      name: session?.user?.name,
      email: session?.user?.email,
      address: formData.address,
      amount: formData.amount,
      date: formData.date,
      phone: formData.phone,
      service_id: formData.service_id,
      service_title: formData.service_title,
      service_price: formData.service_price,
      service_img: formData.service_img,
    };

    console.log("Updated Data:", submitData);

    const res = await fetch(
      `http://localhost:3000/api/my-bookings/${data._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      }
    );

    if (res.ok) {
      toast.success("Booking updated successfully!");
      router.push("/my-bookings");
    } else {
      toast.error("Update failed!");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-6">
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Update Booking
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={session?.user?.name || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            value={session?.user?.email || ""}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Due amount
          </label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Main St, City, Country"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Submit */}
        <div className="text-center mt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
          >
            Update Booking
          </button>
        </div>
      </form>
    </div>
  );
}
