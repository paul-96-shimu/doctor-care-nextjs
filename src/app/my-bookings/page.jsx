'use client';


import React, { useEffect, useState } from 'react';
import MyBookingTable from '../tables/MyBookingTable';

export default function MyBookingPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMyBooking = async () => {
      const res = await fetch('/api/service');
      const d = await res.json();
      setData(d);
    };
    fetchMyBooking();
  }, []);
  return (
    <div>My Booking Page
      <MyBookingTable bookings={data} />
    </div>
  );
}
