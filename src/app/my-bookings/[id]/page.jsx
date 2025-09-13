import BookingUpdatedForm from '@/components/forms/BookingUpdatedFrom'
import React from 'react'

export default async function UpdatedBookingpage({params}) {

    const p = await  params
    const res= await fetch(`http://localhost:3000/api/my-bookings/${p.id}`)
    const data =  res.json()
  return (
    <div>
      <BookingUpdatedForm data={data}></BookingUpdatedForm>
    </div>
  )
}
