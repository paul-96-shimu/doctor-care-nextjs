import { authOptions } from "@/lib/authOptions";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";




export const GET = async (request) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json([], { status: 401 });
  }
  const email = session.user?.email;
  const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
  const result = await bookingCollection.find({ email }).toArray();
  return NextResponse.json(result);
}

export const POST = async (request) => {
 const body = await request.json();
 const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
 const result = await bookingCollection.insertOne(body);

 return NextResponse.json(result)
};
