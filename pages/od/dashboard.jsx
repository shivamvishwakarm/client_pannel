import React from 'react'
import { useState } from 'react';
import Logo from '@/components/Logo';
import Layout from '@/components/Layout';
import { router } from 'next/router';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import Od_login from './od-login';

export const Dashboard = () => {

  const [showNav, setShowNav] = useState(false);

  const { user, login, setLogin } = useAuth();
  const od_user = {...user};
  console.log('od_user:', od_user.role);
  console.log('image path:', od_user.image1);

  if(!login) {
    return <Od_login />
  }

  return (
    <Layout>
      <div className="container flex">
        <div className=" p-8">
          {/* User Image */}
          <Image src={"/photo.png"} alt="User" width={48} height={48}  className="w-48 h-48 rectangle-full border-2	border-black	" />
          {/* <img src="/photo.jpg" alt="User" className="w-48 h-48 rectangle-full border-2	border-black	" /> */}
        </div>
        <div className="w-[50rem] p-8">
          {/* Account Statement */}
          <p className="text-xl font-semibold mb-4 bg-green-300	px-2">ECSC GOVT. - My Account</p>
          <div className="space-y-4">
            {/* {accountData.map((entry, index) => ( key={index}  */}
            <div className="border p-4 rounded-lg shadow-md">
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Account Holder Name: </h4>
                <p className='px-2'>{od_user.name_of_entrepreneur}</p>

              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Aadhaar Number: </h4>
                <p className='px-2'>{od_user.aadhar_no}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>PAN Number: </h4>
                <p className='px-2'>{od_user.pan_no}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Bank Name: </h4>
                <p className='px-2'>{od_user.bank_name}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Father Name: </h4>
                <p className='px-2'>{od_user.father_name}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Date of Birth: </h4>
                <p className='px-2'>{od_user.date_of_birth}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Gender: </h4>
                <p className='px-2'>{od_user.gender}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Physically Handicapped: </h4>
                <p className='px-2'>{od_user.physically_handicapped}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Name of Enterprise: </h4>
                <p className='px-2'>{od_user.name_of_enterprise}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Type of Organization: </h4>
                <p className='px-2'>{od_user.type_of_org}</p>
              </div>

              <h3 className='font-bold bx-4 py-2'>Residential Address: </h3>
              <table className="table-auto border-spacing-px w-[40rem] border border-black-700">
                <thead>
                  <tr>
                    <th>Village</th>
                    <th>Block</th>
                    <th>City</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Pin</th>
                  </tr>
                </thead>


                <tbody>
                  {/* {ods.length > 0 && ods.map((od) => ( key={od._id} */}
                    <tr  className="border-separate my-4 ">
                      <td className='text-center'>{od_user.r_village}</td>
                      <td className='text-center'>{od_user.r_block}</td>
                      <td className='text-center'>{od_user.r_city}</td>
                      <td className='text-center'>{od_user.r_district}</td>
                      <td className='text-center'>{od_user.r_state}</td>
                      <td className='text-center'>{od_user.r_pincode}</td>
                    </tr>
                </tbody>

              </table>
              <h3 className='font-bold py-4 px-2'>Official Address: </h3>
              <table className="table-auto border-spacing-px w-[40rem] border border-black-500">
                <thead>
                  <tr>
                    <th>Village</th>
                    <th>Block</th>
                    <th>City</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Pin</th>
                  </tr>
                </thead>


                <tbody>
                  {/* {ods.length > 0 && ods.map((od) => ( key={od._id} */}
                    <tr  className="border-separate my-4">
                    <td className='text-center'>{od_user.o_village}</td>
                      <td className='text-center'>{od_user.o_block}</td>
                      <td className='text-center'>{od_user.o_city}</td>
                      <td className='text-center'>{od_user.o_district}</td>
                      <td className='text-center'>{od_user.o_state}</td>
                      <td className='text-center'>{od_user.o_pincode}</td>
                    </tr>
                </tbody>

              </table>



              {/* Add other fields here */}
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>


    </Layout>

  )
}


export default Dashboard;