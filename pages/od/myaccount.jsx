import React from 'react'
import { useState } from 'react';
import Layout from '@/components/Layout';
import { useAuth } from './authContext';


export const myaccount = () => {
  const [showNav, setShowNav] = useState(false);
  const { user, login, logout } = useAuth();
  const od_user = {...user};
  console.log('od_user_in_myaccount:', od_user);

  return (
    <Layout>
      <div className="flex flex-col h-screen">
        <div>
          <h2 className="text-xl font-semibold mb-4 bg-green-300	px-2">Account Overview</h2>
          <div className="border p-4 rounded-lg shadow-md">
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Account Number: </h4>
              <p className='px-2'>{od_user.bank_ac}</p>

            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Avialable Balance: </h4>
              <p className='px-2'>{od_user.avialable_balance}/- INR</p>
            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Bank: </h4>
              <p className='px-2'>{od_user.bank_name}</p>
            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Branch Name</h4>
              <p className='px-2'>{od_user.branch_name}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 bg-green-300  my-4	px-2" >Nominee Details</h2>
          <div className="border p-4 rounded-lg shadow-md">
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Nominee Name:  </h4>
              <p className='px-2'>{od_user.nominee_name}</p>

            </div>
            <div className='flex px-2 py-2'>
              <h4 className='font-bold'>Relationship with Nominee: </h4>
              <p className='px-2'>{od_user.relationship_nominee}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default myaccount;