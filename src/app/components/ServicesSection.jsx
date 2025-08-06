// app/components/ServicesSection.jsx
import dbConnect from '@/lib/dbConnect';
import Image from 'next/image';
import React from 'react';

export default async function ServicesSection() {
  const serviceCollection = await dbConnect("tost_services");
  const data = await serviceCollection.find({}).toArray();

  return (
    <div className="grid grid-cols-12 gap-4 p-4">
      {data.map((item) => (
        <div className="col-span-12 sm:col-span-6 md:col-span-4" key={item._id}>
          <Image
            src={item.img}
            alt="service image"
            width={314}
            height={208}
            className="rounded"
          />
          <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
          <p className="text-gray-600">{item.service_description}</p>
        </div>
      ))}
    </div>
  );
}
