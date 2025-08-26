// app/components/ServicesSection.jsx
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";

export default async function ServicesSection() {

  const servicesCollection = dbConnect(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.find({}).toArray();


  return (
        <div className="grid grid-cols-12 gap-4 container mx-auto py-12">
      {data.map((item) => (
        <div className="col-span-12 sm:col-span-6 md:col-span-4 bg-amber-100 p-6" key={item._id}>
          <Image
            src={item.img}
            alt="service image"
            width={314}
            height={208}
            className="rounded w-full h-3/4"
          />
          <h2 className="text-xl font-semibold mt-2">{item.title}</h2>
          <p className="text-yellow-600">Price: {item.price}</p>

       
          <Link href={`/services/${item._id}`} className="text-orange-400 inline-flex items-center mt-2">
            View Details <FaLongArrowAltRight className="ml-2" />
          </Link>
        </div>
      ))}
    </div>
  );
}
