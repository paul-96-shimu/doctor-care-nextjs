

import { getServerSession } from "next-auth/next";


import { authOptions } from '@/lib/authOptions';
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import { revalidatePath } from "next/cache";

export const DELETE = async (request, { params }) => {
  const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
  const p = params;
  const query = { _id: new ObjectId(p.id) };
  const session = await getServerSession(authOptions);

  const currentBooking = await bookingCollection.findOne(query);
  const isOwner = session?.user?.email == currentBooking.email;

  if (isOwner) {
    const result = await bookingCollection.deleteOne(query);
    revalidatePath("/my-bookings")
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "You are not authorized to delete this booking" }, { status: 403 });
  }
};


export const GET = async (request, { params }) => {
  const p = await params;
  const servicesCollection = await dbConnect(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(data);

 
};

