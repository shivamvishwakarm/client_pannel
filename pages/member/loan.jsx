import React from "react";
import Layout from "@/components/Layout";
import { useState } from "react";
import axios from 'axios';

export default function Loan() {

//   const [formData, setFormData] = useState({
//     senderAddress: '',
//     senderEmail: '',
//     senderPhone: '',
//     recipientEmail: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { senderAddress, senderEmail, senderPhone, recipientEmail } = formData;
//     try {
//       const response = await axios.post('/api/send-mail', {
//         senderEmail,
//         recipientEmail,
//         senderAddress,
//         senderPhone,
//       });

//       console.log('Email sent:', response.data);
//     } catch (error) {
//       console.error('Error sending email:', error);
//     }
//   };

  return (
   
    <Layout>
      <h1>Loan</h1>
      <div className="flex justify-center ">
      <div className="max-w-lg p-6 bg-transparent rounded-lg shadow-md w-full">
        <div className="mb-4">
          <p className="text-gray-600">Name: </p>
          <input
            name="senderAddress"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter your name"
            // value={formData.senderAddress}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Father / Guardian Name:</p>
          <input
            type="text"
            name="senderEmail"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter father's name"
            // value={formData.senderEmail}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Aadhar no:</p>
          <input
            type="tel"
            name="senderPhone"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="Enter aadhar no"
            // value={formData.senderPhone}
            // onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Register mobile no:</p>
          <input
            type="tel"
            name="senderPhone"
            className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
            placeholder="mobile no"
            // value={formData.senderPhone}
            // onChange={handleInputChange}
          />
        </div>
        <form >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address: </label>
            <textarea
              type="text"
              name="recipientEmail"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Enter recipient's email address"
            //   value={formData.recipientEmail}
            //   onChange={handleInputChange}
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

    
    </Layout>
 
  );
}
