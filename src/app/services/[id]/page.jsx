// app/services/[id]/page.jsx

import Image from 'next/image';
import React from 'react';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

export default async function ServiceDetailspage({ params }) {
  const p =  await params;
  const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });


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
      <section className="p-8">
        {data ? (
          <>
            {data.img ? (
              <Image
                src={data.img}
                alt={data.title || 'Service Image'}
                width={752}
                height={300}
                className="w-full h-auto rounded"
              />
            ) : (
              <p className="text-gray-500 mb-4">No image available</p>
            )}

            <h2 className="text-3xl font-bold mt-6 mb-4">{data.title}</h2>
            <p className="mb-2">{data.description}</p>
           
          </>
        ) : (
          <p className="text-red-500">Service not found.</p>
        )}

       
      </section>
    </div>
  );
}
