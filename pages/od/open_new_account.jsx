import Layout from '@/components/Layout'
import React from 'react'
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import Od_login from './od-login';

export const Open_new_account = () => {

  const {login,setLogin} = useAuth(); // setting user info and login status in authContext (context api)

  if(!login) return (<Od_login/>)

  return (
    <Layout>
      <div className="max-w-2xl	 mx-auto p-4">
        <div className='text-center	flex flex-col py-4'>
          <h1 className='bg-green-700 rounded text-white px-4 py-4'>Open New Account: </h1>
        </div>

        <form className="space-y-4">
          {/* names input */}
          <div>
            <h1 className='bg-blue-700 rounded text-white px-4 py-4'>Personal Details: </h1>
            <div className='flex'>
              <input
                type="text"
                id="name"
                placeholder="First name"
                value={""}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 m-2 w-full rounded"
                required
              />
              <input
                type="text"
                id="name"
                placeholder="Middle name"
                value={""}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 m-2 w-full rounded"
                required
              />
              <input
                type="text"
                id="name"
                placeholder="Last name"
                value={""}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 m-2 w-full rounded"
                required
              />
            </div>

            <div className='py-4 grid grid-cols-2 gap-x-2	rounded'>
              <div>

                <select
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border"
                  required
                >
                  <option value="">Select Application type</option>
                  <option value="bank1">New Account</option>
                  <option value="bank2">Update Account</option>

                </select>
              </div>

              {/* another row */}
              <div>
                <select
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border w-full rounded"
                  required
                >
                  <option value="">Select Account type</option>
                  <option value="saving">Saving</option>
                  <option value="current">Current</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            {/* anotehr row */}
            <div className='grid grid-cols-2 gap-x-2	rounded'>
              <div>

                <input
                  type='date'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border"
                  required
                />
              </div>

              {/* another row */}
              <div>
                <select
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border rounded"
                  required
                >
                  <option value="">Select Material Status</option>
                  <option value="bank1">Married</option>
                  <option value="bank1">Unmarried</option>
                  <option value="bank2">divorce</option>
                  <option value="bank2">widow</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            {/* another row */}

            <div className='grid grid-cols-2 gap-x-2	rounded'>
              <div>

                <select
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                >
                  <option value="">Select Occupation</option>
                  <option value="bank1">Govt. service</option>
                  <option value="bank2">Private Sector</option>
                  <option value="bank2">Business</option>
                  <option value="bank2">Self Employeed</option>
                  <option value="bank2">Working Professional</option>
                  <option value="bank2">Others</option>

                </select>
              </div>

              {/* another row */}
              <div>
                <select
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full"
                  required
                >
                  <option value="">Select Nationality</option>
                  <option value="bank1">Indian</option>
                  <option value="bank2">Others</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            {/* another row */}

            <div className='py-4 grid grid-cols-2 gap-x-2	rounded'>
              <div>

                <input
                  type='text'
                  placeholder='Enter your PAN number'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                />

              </div>

              {/* another row */}
              <div>

                <input
                  type='text'
                  placeholder='Country of tax residence'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                />

              </div>
            </div>

          </div>

          {/* Contact section */}
          <div>

            <h1 className='bg-blue-700 rounded text-white px-4 py-4'>Contact Details: </h1>
            <div className='py-4 grid grid-cols-2 gap-x-2	rounded'>
              <div>

                <input
                  type='text'
                  placeholder='Enter your number:'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                />

              </div>

              {/* another row */}
              <div>

                <input
                  type='email'
                  placeholder='Enter your email id:'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                />

              </div>
            </div>
            <div className='py-4 grid grid-cols-3 gap-x-2	rounded'>
              Enter Tele-phone Number:
              <div>

                <input
                  type='text'
                  placeholder='Enter STD Code:'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                />

              </div>

              {/* another row */}
              <div>

                <input
                  type='email'
                  placeholder='Enter number'
                  id="selectedBank"
                  value={""}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="border p-2 w-full rounded"
                  required
                />

              </div>
            </div>
          </div>


          {/* Address section */}

          <div>
            <h1 className='bg-blue-700 rounded text-white px-4 py-4'>Address Details: </h1>
            <div className='flex'>

              <textarea
                type="text"
                id="name"
                placeholder=" Enter your full address: "
                value={""}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 m-2 w-full rounded"
                required
              />
            </div>

            <div className='py-4 grid grid-cols-3 gap-x-2	rounded'>
              <div>
                <input type="text" placeholder='District' className='rounded' />
              </div>
              <div>
                <input type="text" placeholder='State' className='rounded' />
              </div>
              <div>
                <input type="text" placeholder='Pincode' className='rounded' />
              </div>
            </div>

            <div className='flex flex-col'>
              <div>
                <select name="address_proof" id="">
                  <option value="voter_id">Select address proof</option>
                  <option value="voter_id">Voter id</option>
                  <option value="voter_id">Driving License</option>
                  <option value="voter_id">Passport</option>
                  <option value="voter_id">Aadhar card</option>
                </select>
              </div>

              <div>
                <input type="text" className='rounded max-w-sm	' placeholder='Enter identiry proof number: ' />
                <input type="text" className='rounded max-w-sm	' placeholder='Issued by: ' />
                <input type="text" className='rounded max-w-sm	' placeholder='Issue date ' />
              </div>
            </div>
          </div>


          {/*  */}

          <div>
            <h1 className='bg-blue-700 rounded text-white px-4 py-4'>DECLARATION CUM UNDERTAKING CUM SELF–CERTIFICATION: </h1>
            <p className='text-xs	py-1'> 1. I have read the copy of Terms and Conditions of the Account Opening Form given to me. The Terms and Conditions have been explained to me/us and having understood, I accept the same.</p>
            <p className='text-xs	py-1'>2. I hereby declare that I have submitted the Aadhaar Card issued by UIDAI voluntarily for identification and /or address proof towards the compliance of KYC norms under the PMLA, 2002</p>
            <p className='text-xs	py-1'>3. I hereby consent that the Bank may verify the same with the UIDAI and authorise the UIDAI expressly to release the identity and address</p>
            <div className='flex'>
              <div>
                <label className='w-full py-4' htmlFor="image1">Upload Image: </label>
                <input type="file" name='image1' />
                <p className='text-xs	py-1'>Image should be passport size and less than 500kb,fomat: jpg/png</p>
              </div>
              <div>
                <label className='w-full py-4' htmlFor="image1">Upload Signature: </label>
                <input type="file" name='image1' />
                <p className='text-xs py-1'>Image should be less than 500kb,fomat: jpg/png</p>
              </div>
              <div>
              <div>
                <input type="text" placeholder='Enter palce name' name='image1' />
              </div>
              <div>
                <input type="date" placeholder='' name='' />
              </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </Layout>
  );
};

export default Open_new_account;
