import React from 'react'
import { useState } from 'react';
import Logo from '@/components/Logo';
import Layout from '@/components/Layout';
import { router } from 'next/router';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import Member_login from './member-login';

export const Dashboard = () => {

  const [showNav, setShowNav] = useState(false);

  const {user, login, setLogin } = useAuth();
  const od_user = { ...user };
  
  // console.log('od_user:', user?.role);


  // if user has not logged in, redirect to member login page
  if (!login) {
    return <Member_login />
  }

  return (
    <Layout>

     <h1 className='not-italic'> Welcome, <span className='text-[#979797]	uppercase underline'>{od_user.name_of_entrepreneur}</span> </h1> 
      <div>
        <Image src="/csp.jpg"
          alt="A picture of white cats"
          width={600}
          height={600}
          className="w-full rounded"
          quality={100}
          unoptimized={true}
        />
      </div>

      <div className='flex justify-between items-center'>
        <div className='top-left'>
          <Image src={od_user?.image2} unoptimized={true} alt="User" width={48} height={48} className="w-48 my-4 rectangle-full	" />
        </div>
        <div className='top-right'>
          <table className='border border-black text-center'>
            <tr>
              <th className='border border-black mx-8'>Type of Enterprise</th>
              <th className='border border-black mx-8'>Micro</th>
              <th className='border border-black mx-8'>Small</th>
              <th className='border border-black mx-8'>Medium</th>
            </tr>
            

              <tr >
                <td className='border border-black mx-8'>
                  Franchisee
                </td>
                <td className='border border-black mx-8'>
                  NA
                </td>
                <td className='border border-black mx-8'>
                  NA
                </td>
                <td className='border border-black mx-8'>
                  NA
                </td>

              </tr>
              <tr >
                <td className='border border-black mx-8'>
                  Services
                </td>
                <td className='border border-black mx-8'>
                  NA
                </td>
                <td className='border border-black mx-8'>
                  NA
                </td>
                <td className='border border-black mx-8'>
                  NA
                </td>

              </tr>
              <tr className=''>
                <td className='border border-black px-16'>
                  KOID
                </td>
                <td className=' text-red-800 text-justify px-16'>
                  {od_user.omt_id}
                </td>
              </tr>
            
          </table>
        </div>

      </div>

      <div className=" lg:flex p-10 border border-black bg-white">
        <div className=" p-8">
          {/* User Image */}
          <Image src={od_user?.image1} unoptimized={true} alt="User" width={50} height={50} className="w-48 h-48 my-4 rectangle-full border-2	border-black	p-1" />
          
          <h3 className='px-2 text-slate-600	font-mono text-2xl'>{od_user.name_of_entrepreneur}</h3>

        </div>
        <div className="w-[50rem] mx-8 border border-blue-400 rounded">
          {/* Account Statement */}

          <p className="text-xl font-semibold mb-4 bg-blue-300	p-2">ECSC GOVT. - My Account</p>
          <div className="space-y-4">
            <div className="p-4 rounded-lg shadow-md">
              
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Aadhaar Number: </h4>
                <p className='px-2'>{od_user.aadhar_no}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>PAN Number: </h4>
                <p className='px-2'>{od_user.pan_no}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Bank Name: </h4>
                <p className='px-2'>{od_user.bank_name}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Father Name: </h4>
                <p className='px-2'>{od_user.father_name}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Date of Birth: </h4>
                <p className='px-2'> {od_user.date_of_birth}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Gender: </h4>
                <p className='px-2'>{od_user.gender}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Physically Handicapped: </h4>
                <p className='px-2'>{od_user.physically_handicapped}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Name of Enterprise: </h4>
                <p className='px-2'>{od_user.name_of_enterprise}</p>
              </div>
              <hr />

              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Type of Organization: </h4>
                <p className='px-2'>{od_user.type_of_org}</p>
              </div>
              <hr />

              <h3 className='font-bold bx-4 py-2'>Residential Address: </h3>
              <hr />
              <table className="table-auto border-spacing-px w-[40rem]">

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
                  <tr className="border-separate my-4 ">
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
                  <tr className="border-separate my-4">
                    <td className='text-center'>{od_user.o_village}</td>
                    <td className='text-center'>{od_user.o_block}</td>
                    <td className='text-center'>{od_user.o_city}</td>
                    <td className='text-center'>{od_user.o_district}</td>
                    <td className='text-center'>{od_user.o_state}</td>
                    <td className='text-center'>{od_user.o_pincode}</td>
                  </tr>
                </tbody>

              </table>

            
            <div className='border  border-black mt-2'>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Bank Name: </h4>
                <p className='px-2'>{od_user.bank_name}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Branch Detail: </h4>
                <p className='px-2'>{od_user.branch_name}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Account No:  </h4>
                <p className='px-2'>{od_user.bank_ac}</p>
              </div>
              <div className='flex px-2 py-2'>
                <h4 className='font-bold'>Payment Receive: </h4>
                <p className='px-2'>{od_user.payment_received}</p>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>


    </Layout>

  )
}


export default Dashboard;