import React from 'react'
import { useState } from 'react';

export const Ticket = ({header}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        // console.log({
        //     name,
        //     email,
        //     fromLocation,
        //     toLocation,
        //     date,
        // });
    };




    return (
        <div className="max-w-md mx-auto p-4">
            <div className='text-center	flex flex-col py-4'>
                <h1 className='bg-blue-700 rounded text-white px-4 py-4'>{header}</h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fromLocation" className="block mb-1 font-medium">
                        From
                    </label>
                    <input
                        type="text"
                        id="fromLocation"
                        placeholder="Enter departure location"
                        value={fromLocation}
                        onChange={(e) => setFromLocation(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="toLocation" className="block mb-1 font-medium">
                        To
                    </label>
                    <input
                        type="text"
                        id="toLocation"
                        placeholder="Enter arrival location"
                        value={toLocation}
                        onChange={(e) => setToLocation(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block mb-1 font-medium">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border p-2 w-full"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Book Ticket
                    </button>
                </div>
            </form>
        </div>
    )
}


export default Ticket;