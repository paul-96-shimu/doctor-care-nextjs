'use client';

import React, { useState, useEffect } from 'react';

export default function MyBookingTable({ bookings }) {
  // bookings হলো array of objects: [{id, image, service, date, price}, ...]
  
  const handleDelete = (id) => {
    console.log('Delete booking', id);
    // API call or state update here
  };

  const handleUpdate = (id) => {
    console.log('Update booking', id);
    // Open modal or navigate to update page
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings && bookings.length > 0 ? (
            bookings.map((booking, idx) => (
              <tr key={booking.id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={booking.service_img} alt={booking.service_title} />
                    </div>
                  </div>
                </td>
                <td>{booking.service_title}</td>
                <td>{booking.date}</td>
                <td>${booking.service_price}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleUpdate(booking.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(booking.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No bookings found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
