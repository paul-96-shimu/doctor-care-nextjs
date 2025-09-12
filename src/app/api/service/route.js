import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (request) => {
 const body = await request.json();
 const bookingCollection = await dbConnect(collectionNamesObj.bookingCollection);
 const result = await bookingCollection.insertOne(body);

 return NextResponse.json(result)
};
