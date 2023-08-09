import React from "react";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function AgentForm() {

  const [formData, setFormData] = useState({
    senderAddress: '',
    senderEmail: '',
    senderPhone: '',
    recipientEmail: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending emails
    console.log(formData); // Replace with your actual submission logic
  };


  return (
<>
      <div className="flex justify-center ">
      <div className="max-w-lg p-6 bg-transparent rounded-lg shadow-md w-full">
        
        <div className="mb-4">
          <p className="text-gray-600">Name</p>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter your name"
            value={formData.senderEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Email:</p>
          <input
            type="email"
            name="senderEmail"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter email address"
            value={formData.senderEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Password</p>
          <input
            type="password"
            name="password"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter your password"
            value={formData.senderEmail}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Phone:</p>
          <input
            type="tel"
            name="senderPhone"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter phone number"
            value={formData.senderPhone}
            onChange={handleInputChange}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              name="recipientEmail"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Enter your pincode"
              value={formData.recipientEmail}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
          <p className="text-gray-600">Address:</p>
          <textarea
            name="senderAddress"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter address"
            value={formData.senderAddress}
            onChange={handleInputChange}
          />
        </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>

    
    </>
 
  );
}
