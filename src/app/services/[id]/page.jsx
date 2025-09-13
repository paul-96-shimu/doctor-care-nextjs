// app/services/[id]/page.jsx

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



export default async function ServiceDetailspage({ params }) {
  const p = params;
  const res = await fetch(`http://localhost:3000/api/service/${p._id}`);
  const data = await res.json();

  return (
    <div>
      {/* Top Banner Section */}
      <section className="flex justify-center">
        <figure className="relative">
          <Image
            src="/assets/images/checkout/checkout.png"
            alt="Checkout"
            width={1137}
            height={300}
            className="w-full h-auto"
          />
          <div className="absolute w-full h-full top-0 bg-black/50 flex items-center ps-16">
            <h1 className="text-white text-3xl font-bold">Service Details</h1>
          </div>
        </figure>
      </section>

      {/* Main Content */}
      <section className="container mx-auto my-12 px-4">
        {data ? (
          <>
            {/* Image Top */}
            {data.img ? (
              <Image
                src={data.img}
                alt={data.title || "Service Image"}
                width={1137}
                height={350}
                className="rounded mx-auto"
              />
            ) : (
              <p className="text-gray-500 mb-4">No image available</p>
            )}

            {/* Content Row */}
            <div className=" ">
              {/* Left Side: Title + Description */}
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4 text-center">{data.title}</h2>
                <p className="mb-4  text-center">{data.description}</p>
              </div>

              {/* Right Side: Checkout Button */}
              <div className='mt-6'>

                <Link href={`/checkout/${data._id}`}>
                  <button
                    className="mx-auto block px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition"
                  >
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <p className="text-red-500">Service not found.</p>
        )}
      </section>


    </div>
  );
}
