import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


export default function ProductForm() {
  const router = useRouter();


  // saving form to database

  const [formData, setFormData] = useState({
    role: 'member',
    omt_id: '',
    password: '',
    email_id: '',
    phone_number: '',
    aadhar_no: '',
    pan_no: '',
    name_of_entrepreneur: '',
    father_name: '',
    date_of_birth: '',
    social_category_entrepreneur: '',
    gender: '',
    physically_handicapped: 'no',
    name_of_enterprise: '',
    r_village: '',
    r_block: '',
    r_city: '',
    r_district: '',
    r_state: '',
    r_pincode: '',
    o_village: '',
    o_block: '',
    type_of_org: '',
    o_city: '',
    o_district: '',
    o_state: '',
    o_pincode: '',
    payment_received: '',
    payment_awaiting: '',
    bank_name: '',
    branch_name: '',
    bank_ac: '',
    image1: '',
    image2: ''
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     console.log("product form ", formData)
      const response = await fetch('/api/member/new/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // we should change this too
      });

      const data = await response.json();
      console.log(data);
      router.push("/admin/memberLogin");
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  };

// to work these function go to upload image section
  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setFormData({ ...formData, image1: file.name });
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image2: file.name });
  };



  return (
    <div className="flex ">
      <div className="max-w-md p-6  rounded-lg max-w-fit shadow-md ">
        {/* h1  */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                OMT ID
              </label>
              <input
                value={formData.omt_id}
                onChange={(e) => {setFormData({...formData,omt_id: e.target.value})}}
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="OMT ID"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                PASSWORD
              </label>
              <input
                value={formData.password}
                onChange={(e) => {setFormData({...formData,password: e.target.value})}}
                type="password"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
              value={formData.email_id}
              onChange={(e) => {setFormData({...formData,email_id: e.target.value})}}
                type="email"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Email Id"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
              value={formData.phone_number}
              onChange={(e) => {setFormData({...formData,phone_number: e.target.value})}}
                type="tel"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Aadhaar Number
              </label>
              <input
                value={formData.aadhar_no}
                onChange={(e) => {setFormData({...formData,aadhar_no: e.target.value})}}
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Aadhaar Number"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                PAN Number
              </label>
              <input
                value={formData.pan_no}
                onChange={(e) => {setFormData({...formData,pan_no: e.target.value})}}
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="PAN Number"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Name of Entrepreneur
            </label>
            <input
              value={formData.name_of_entrepreneur}
              onChange={(e) => {setFormData({...formData,name_of_entrepreneur: e.target.value})}}

              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Name of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Father Name
            </label>
            <input
            value={formData.father_name}
            onChange={(e) => {setFormData({...formData,father_name: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Father Name"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
            value={formData.date_of_birth}
            onChange={(e) => {setFormData({...formData,date_of_birth: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="YY-MM-DD"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Social Category of Entrepreneur
            </label>
            <input
            value={formData.social_category_entrepreneur}
            onChange={(e) => {setFormData({...formData,social_category_entrepreneur: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Social Category of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              value={formData.gender}
              onChange={(e) => {setFormData({...formData,gender: e.target.value})}}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              name="gender"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Physically Handicapped</label>
            <select
            value={formData.physically_handicapped}
            onChange={(e) => {setFormData({...formData,physically_handicapped: e.target.value})}}
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              name="gender"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Name of Enterprise
            </label>
            <input
            value={formData.name_of_enterprise}
            onChange={(e) => {setFormData({...formData,name_of_enterprise: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Name of Enterprise"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Type of Organization
            </label>
            <input
            value={formData.type_of_org}
            onChange={(e) => {setFormData({...formData,type_of_org: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Type of Organization"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Residential Address:-</h2>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Village/Town
            </label>
            <input
            value={formData.r_village}
            onChange={(e) => {setFormData({...formData,r_village: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Village/Town"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Block
            </label>
            <input
            value={formData.r_block}
            onChange={(e) => {setFormData({...formData,r_block: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Block"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
            value={formData.r_city}
            onChange={(e) => {setFormData({...formData,r_city: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="City"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              District
            </label>
            <input
            value={formData.r_district}
            onChange={(e) => {setFormData({...formData,r_district: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="District"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              State
            </label>
            <input
            value={formData.r_state}
            onChange={(e) => {setFormData({...formData,r_state: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="State"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Pin Code
            </label>
            <input
            value={formData.r_pincode}
            onChange={(e) => {setFormData({...formData,r_pincode: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Pin Code"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Official Address:-</h2>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Village/Town
            </label>
            <input
            value={formData.o_village}
            onChange={(e) => {setFormData({...formData,o_village: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Village/Town"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Block
            </label>
            <input
            value={formData.o_block}
            onChange={(e) => {setFormData({...formData,o_block: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Block"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              City
            </label>
            <input
            value={formData.o_city}
            onChange={(e) => {setFormData({...formData,o_city: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="City"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              District
            </label>
            <input
            value={formData.o_district}
            onChange={(e) => {setFormData({...formData,o_district: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="District"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              State
            </label>
            <input
            value={formData.o_state}
            onChange={(e) => {setFormData({...formData,o_state: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="State"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Pin Code
            </label>
            <input
            value={formData.o_pincode}
            onChange={(e) => {setFormData({...formData,o_pincode: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Pin Code"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Bank Details:-</h2>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Payment Received
            </label>
            <input
            value={formData.payment_received}
            onChange={(e) => {setFormData({...formData,payment_received: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Payment Received"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Payment Awaiting
            </label>
            <input
            value={formData.payment_awaiting}
            onChange={(e) => {setFormData({...formData,payment_awaiting: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Payment Awaiting"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
            value={formData.bank_name}
            onChange={(e) => {setFormData({...formData,bank_name: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Name"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Branch name
            </label>
            <input
            value={formData.branch_name}
            onChange={(e) => {setFormData({...formData,branch_name: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Branch Name"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Bank Account Number
            </label>
            <input
            value={formData.bank_ac}
            onChange={(e) => {setFormData({...formData,bank_ac: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Account Number"
            />
          </div>



         {/* work in process */}

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload)
            </label>
            <input
           // is not the proper way
           onChange={(e) => {setFormData({...formData,image1: e.target.value})}}
           type="file" className="mt-1 block w-full" />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload two)
            </label>
            <input
           // is not the proper way

            onChange={(e) => {setFormData({...formData,image2: e.target.value})}}
            type="file" className="mt-1 block w-full" />
          </div>
          {/* <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload)
            </label>
            <input
           
           onChange={handleImage1Change}
           type="file" className="mt-1 block w-full" />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload two)
            </label>
            <input
           
            onChange={handleImage2Change}
            type="file" className="mt-1 block w-full" />
          </div> */}

          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
