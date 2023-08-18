import React from "react";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AgentForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    pincode: '',
    address: ''
  });

  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("before api call")
      const response = await fetch('/api/agent/new/route', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      const data = await response.json();
      console.log(data);
      router.push("/admin/agentList");
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

  return (
<>  
<form onSubmit={handleSubmit}>
      <div className="flex justify-center ">
      <div className="max-w-lg p-6 bg-transparent rounded-lg shadow-md w-full">
        
        <div className="mb-4">
          <p className="text-gray-600">Name</p>
          <input
            type="text"
            name="name"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => {setFormData({...formData,name: e.target.value})}}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Email:</p>
          <input
            type="email"
            name="senderEmail"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => {setFormData({...formData,email: e.target.value})}}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Password</p>
          <input
            type="password"
            name="password"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => {setFormData({...formData,password: e.target.value})}}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Phone:</p>
          <input
            type="tel"
            name="senderPhone"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => {setFormData({...formData,phone: e.target.value})}}
          />
        </div>
        
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              name="recipientEmail"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Enter your pincode"
              value={formData.pincode}
              onChange={(e) => {setFormData({...formData,pincode: e.target.value})}}
              />
          </div>
          <div className="mb-4">
          <p className="text-gray-600">Address:</p>
          <textarea
            name="senderAddress"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter address"
            value={formData.address}
            onChange={(e) => {setFormData({...formData,address: e.target.value})}}
          />
        </div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Send Message
          </button>
      </div>
    </div>

    </form>
    </>
 
  );
}
