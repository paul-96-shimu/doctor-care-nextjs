// 'use client';


// import React, { useEffect, useState } from 'react';
import MyBookingTable from '../tables/MyBookingTable';
import { headers } from 'next/headers';


 const fetchMyBooking = async () => {
      const res = await fetch('http://localhost:3000/api/service',{
        headers: await headers()

      });
      const d = await res.json();
      // setData(d);
      return d;
    };

export default async function MyBookingPage() {
  const data = await fetchMyBooking();
  // const [data, setData] = useState([]);
  // useEffect(() => {
   
  //   fetchMyBooking();
  // }, []);
  return (
    <div>My Booking Page
   <MyBookingTable bookings={data}  />
    </div>
  );
}
