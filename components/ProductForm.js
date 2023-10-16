import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";


export default function ProductForm() {
  const router = useRouter();


  const [memberData, setMemberData] = useState({
    role: 'member',
    visible: true,
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
    physically_handicapped: 'No',
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
    image2: '',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("memberData image1: ", memberData.image1);


    const formData = new FormData();
    Object.keys(memberData).forEach((key) => {
      formData.append(key, memberData[key]);
    });


    // console.log("formData image: ", formData.get('image1'));
    

    try {
      const response = await axios.post("/api/member/new/route", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // console.log(response);
      router.push("/admin/memberLogin");
    } catch (error) {
      console.error(error);
      // Handle errors here and possibly show an error message to the user
    }
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
                value={memberData.omt_id}
                onChange={(e) => {setMemberData({...memberData,omt_id: e.target.value})}}
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
                value={memberData.password}
                onChange={(e) => {setMemberData({...memberData,password: e.target.value})}}
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
              value={memberData.email_id}
              onChange={(e) => {setMemberData({...memberData,email_id: e.target.value})}}
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
              value={memberData.phone_number}
              onChange={(e) => {setMemberData({...memberData,phone_number: e.target.value})}}
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
                value={memberData.aadhar_no}
                onChange={(e) => {setMemberData({...memberData,aadhar_no: e.target.value})}}
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
                value={memberData.pan_no}
                onChange={(e) => {setMemberData({...memberData,pan_no: e.target.value})}}
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
              value={memberData.name_of_entrepreneur}
              onChange={(e) => {setMemberData({...memberData,name_of_entrepreneur: e.target.value})}}

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
            value={memberData.father_name}
            onChange={(e) => {setMemberData({...memberData,father_name: e.target.value})}}
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
            value={memberData.date_of_birth}
            onChange={(e) => {setMemberData({...memberData,date_of_birth: e.target.value})}}
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
            value={memberData.social_category_entrepreneur}
            onChange={(e) => {setMemberData({...memberData,social_category_entrepreneur: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Social Category of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              value={memberData.gender}
              onChange={(e) => {setMemberData({...memberData,gender: e.target.value})}}
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
            value={memberData.physically_handicapped}
            onChange={(e) => {setMemberData({...memberData,physically_handicapped: e.target.value})}}
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
            value={memberData.name_of_enterprise}
            onChange={(e) => {setMemberData({...memberData,name_of_enterprise: e.target.value})}}
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
            value={memberData.type_of_org}
            onChange={(e) => {setMemberData({...memberData,type_of_org: e.target.value})}}
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
            value={memberData.r_village}
            onChange={(e) => {setMemberData({...memberData,r_village: e.target.value})}}
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
            value={memberData.r_block}
            onChange={(e) => {setMemberData({...memberData,r_block: e.target.value})}}
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
            value={memberData.r_city}
            onChange={(e) => {setMemberData({...memberData,r_city: e.target.value})}}
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
            value={memberData.r_district}
            onChange={(e) => {setMemberData({...memberData,r_district: e.target.value})}}
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
            value={memberData.r_state}
            onChange={(e) => {setMemberData({...memberData,r_state: e.target.value})}}
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
            value={memberData.r_pincode}
            onChange={(e) => {setMemberData({...memberData,r_pincode: e.target.value})}}
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
            value={memberData.o_village}
            onChange={(e) => {setMemberData({...memberData,o_village: e.target.value})}}
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
            value={memberData.o_block}
            onChange={(e) => {setMemberData({...memberData,o_block: e.target.value})}}
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
            value={memberData.o_city}
            onChange={(e) => {setMemberData({...memberData,o_city: e.target.value})}}
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
            value={memberData.o_district}
            onChange={(e) => {setMemberData({...memberData,o_district: e.target.value})}}
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
            value={memberData.o_state}
            onChange={(e) => {setMemberData({...memberData,o_state: e.target.value})}}
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
            value={memberData.o_pincode}
            onChange={(e) => {setMemberData({...memberData,o_pincode: e.target.value})}}
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
            value={memberData.payment_received}
            onChange={(e) => {setMemberData({...memberData,payment_received: e.target.value})}}
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
            value={memberData.payment_awaiting}
            onChange={(e) => {setMemberData({...memberData,payment_awaiting: e.target.value})}}
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
            value={memberData.bank_name}
            onChange={(e) => {setMemberData({...memberData,bank_name: e.target.value})}}
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
            value={memberData.branch_name}
            onChange={(e) => {setMemberData({...memberData,branch_name: e.target.value})}}
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
            value={memberData.bank_ac}
            onChange={(e) => {setMemberData({...memberData,bank_ac: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Account Number"
            />
          </div>



         {/* work in process */}

         <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Upload Picture
            </label>
            <input 
            type="file" 
            className="mt-1 block w-full" 
            onChange={(e) => setMemberData({...memberData, image1: e.target.files[0]})}
            />
          </div>

        {/* uncomment it to add second image option and also do change it schema and useState */}

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload two)
            </label>
            <input
            type="file" 
            className="mt-1 block w-full" 
            onChange={(e) => setMemberData({...memberData, image2: e.target.files[0]}) }          
            />
          </div>
         

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
