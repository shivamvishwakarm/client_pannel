import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Od_login from './od-login';

export const Profile = () => {
  const [showNav, setShowNav] = useState(false);
  const { user, login, logout } = useAuth();
  const od_user = {...user};
  // console.log('od_user_in_profile:', od_user);

  if(!login) return (
    <Od_login />
  )

  return (
    <Layout>
      <Image src="/csp.jpg" 
      alt="A picture of white cats"
      width={600}
      height={600}
      className="w-full rounded my-4"
      quality={100}
      unoptimized={true}
     />
      <div className="flex flex-col lg:flex-row">
        <div className=" p-8">
          {/* User Image */}
          <Image src={od_user?.image1} unoptimized={true} alt="User" width={48} height={48}  className="w-48 h-48 rectangle-full border-2	border-black	" />
          {/* <img src="/photo.jpg" alt="User" className="w-40 h-50 rectangle-full border-2	border-black	" /> */}
        </div>


        <div>
          <h2 className="text-xl font-semibold mb-4 bg-green-300	px-2">My Profile</h2>
          <div className="border p-4 rounded-lg shadow-md">
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Name: </h4>
              <p className='px-2'>{od_user.name_of_entrepreneur}</p>

            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Phone: </h4>
              <p className='px-2'>{od_user.phone_number}</p>
            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Email: </h4>
              <p className='px-2'>{od_user.email_id}</p>
            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Address: </h4>
              <p className='px-2'>{od_user.r_village}, {od_user.r_block}, {od_user.r_district}, {od_user.r_state}, {od_user.r_pincode}</p>
            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Aadhar No: </h4>
              <p className='px-2'>{od_user.aadhar_no}</p>
            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>PAN No: </h4>
              <p className='px-2'>{od_user.pan_no}</p>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}


export default Profile;
