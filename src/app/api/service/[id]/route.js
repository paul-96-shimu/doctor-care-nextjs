
import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const p = await params;
  const servicesCollection = await dbConnect(collectionNamesObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(data);

 
};

