
"use client";


import { useRouter } from 'next/navigation';
import React from 'react'

export default function DeleteBooking({ id }) {

    const router =useRouter()
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:3000/api/service/${id}`, {
            method: 'DELETE',
        });

        const data = await res.json();
        console.log(data);
        router.refresh();
    };

    return (
        <div>

            <button
                className="btn btn-sm btn-error"
                onClick={() => handleDelete(id)}
            >
                Delete
            </button>
        </div>
    )
}
