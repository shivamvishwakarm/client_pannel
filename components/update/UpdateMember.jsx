import React from "react";

const UpdateMember = (member) => {

  const [member, setmember] = useState({
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
    physically_handicapped: '',
    name_of_enterprise: '',
    r_village: '',
    r_block: '',
    r_city: '',
    r_district: '',
    r_state: '',
    r_pincode: '',
    o_village: '',
    o_block: '',
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
  })
  return (
    <div className="flex ">
      <div className="max-w-md p-6  rounded-lg max-w-fit shadow-md ">
        {/* h1  */}
        {/* onSubmit={handleSubmit} */}
        <form >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                OMT ID
              </label>
              <input
                value={member.omt_id}
                onChange={(e) => {setmember({...member,omt_id: e.target.value})}}
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
                value={member.password}
                onChange={(e) => {setmember({...member,password: e.target.value})}}
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
              value={member.email_id}
              onChange={(e) => {setmember({...member,email_id: e.target.value})}}
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
              value={member.phone_number}
              onChange={(e) => {setmember({...member,phone_number: e.target.value})}}
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
                value={member.aadhar_no}
                onChange={(e) => {setmember({...member,aadhar_no: e.target.value})}}
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
                value={member.pan_no}
                onChange={(e) => {setmember({...member,pan_no: e.target.value})}}
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
              value={member.name_of_entrepreneur}
              onChange={(e) => {setmember({...member,name_of_entrepreneur: e.target.value})}}

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
            value={member.father_name}
            onChange={(e) => {setmember({...member,father_name: e.target.value})}}
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
            value={member.date_of_birth}
            onChange={(e) => {setmember({...member,date_of_birth: e.target.value})}}
              type="date"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="YY-MM-DD"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Social Category of Entrepreneur
            </label>
            <input
            value={member.social_category_entrepreneur}
            onChange={(e) => {setmember({...member,social_category_entrepreneur: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Social Category of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              value={member.gender}
              onChange={(e) => {setmember({...member,gender: e.target.value})}}
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
            value={member.physically_handicapped}
            onChange={(e) => {setmember({...member,physically_handicapped: e.target.value})}}
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
            value={member.name_of_enterprise}
            onChange={(e) => {setmember({...member,name_of_enterprise: e.target.value})}}
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
            value={member.r_village}
            onChange={(e) => {setmember({...member,r_village: e.target.value})}}
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
            value={member.r_block}
            onChange={(e) => {setmember({...member,r_block: e.target.value})}}
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
            value={member.r_city}
            onChange={(e) => {setmember({...member,r_city: e.target.value})}}
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
            value={member.r_district}
            onChange={(e) => {setmember({...member,r_district: e.target.value})}}
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
            value={member.r_state}
            onChange={(e) => {setmember({...member,r_state: e.target.value})}}
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
            value={member.r_pincode}
            onChange={(e) => {setmember({...member,r_pincode: e.target.value})}}
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
            value={member.o_village}
            onChange={(e) => {setmember({...member,o_village: e.target.value})}}
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
            value={member.o_block}
            onChange={(e) => {setmember({...member,o_block: e.target.value})}}
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
            value={member.o_city}
            onChange={(e) => {setmember({...member,o_city: e.target.value})}}
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
            value={member.o_district}
            onChange={(e) => {setmember({...member,o_district: e.target.value})}}
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
            value={member.o_state}
            onChange={(e) => {setmember({...member,o_state: e.target.value})}}
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
            value={member.o_pincode}
            onChange={(e) => {setmember({...member,o_pincode: e.target.value})}}
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
            value={member.payment_received}
            onChange={(e) => {setmember({...member,payment_received: e.target.value})}}
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
            value={member.payment_awaiting}
            onChange={(e) => {setmember({...member,payment_awaiting: e.target.value})}}
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
            value={member.bank_name}
            onChange={(e) => {setmember({...member,bank_name: e.target.value})}}
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
            value={member.branch_name}
            onChange={(e) => {setmember({...member,branch_name: e.target.value})}}
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
            value={member.bank_ac}
            onChange={(e) => {setmember({...member,bank_ac: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Account Number"
            />
          </div>



         

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload)
            </label>
            <input
            value={member.image1}
            onChange={(e) => {setmember({...member,image1: e.target.value})}}
             type="file" className="mt-1 block w-full" />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Picture (Upload two)
            </label>
            <input
            value={member.image2}
            onChange={(e) => {setmember({...member,image2: e.target.value})}}
             type="file" className="mt-1 block w-full" />
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
};

export default UpdateMember;




