import dbConnect, { collectionNamesObj } from "@/lib/dbConnect"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export const GET = async(req,{params})=>{
    const p = await params

    const bookingCollection =dbConnect(collectionNamesObj.bookingCollection)
    const query ={_id: new ObjectId(p.id)}
    const singleBooking =await bookingCollection.findOne(query )
    return NextResponse({singleBooking})
}


export const Patch = async(req,{params})=>{

     const p = await params

    const bookingCollection =dbConnect(collectionNamesObj.bookingCollection)
    const query ={_id: new ObjectId(p.id)}
    const body = await req.json()
    const filter = {
        $set: {...body}
    }
    const option={
        upsert: true
    }

    const updatedResponse = await bookingCollection.updateOne(query,filter,option)
revalidatePath("/my-bookings")
    return NextRequest({updatedResponse})
}