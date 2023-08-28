import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function OdForm() {
  // saving form to database
  const router = useRouter();


  // changes needed in image
  const [odData, setOdData] = useState({
    role:'od',
    customer_id: '',
    password: '',
    bank_name: '',
    branch_name: '',
    bank_ac: '',
    avialable_balance: '',
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
    type_of_org: '',
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
    relationship_nominee: '',
    nominee_name: '',
    image1: "", 
    image2: "", // commented
  });



  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("odData:", odData);

    // working on dynamic image store in database
    const formData = new FormData();
    Object.keys(odData).forEach((key) => {
      formData.append(key, odData[key]);
    });
    
    

    // console.log("formData:", formData.get("image1"));

    // formData.forEach((value, key) => {
    //   console.log(key,": ", value);
    // });

    try {
      const response = await axios.post("/api/od/new/route", formData,
      {
        headers: {"Content-Type": "multipart/form-data"},
      });

      // const data = await response.json();
      console.log(response);
      // router.push("/admin/odLogin");
    } catch (error) {
      console.error(error);
      // Handle errors here
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
Customer ID
              </label>
              <input
              value={odData.customer_id}
              onChange={(e) => {setOdData({...odData, customer_id: e.target.value})}}
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Customer ID"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                PASSWORD
              </label>
              <input
              value={odData.password}
              onChange={(e) => {setOdData({...odData, password: e.target.value})}}
                type="password"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Password"
              />
            </div>
          </div>
          
 
            <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Bank Name
            </label>
            <input
            value={odData.bank_name}
            onChange={(e) => {setOdData({...odData, bank_name: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Name"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Branch Name
            </label>
            <input
            value={odData.branch_name}
            onChange={(e) => {setOdData({...odData, branch_name: e.target.value})}}
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
            value={odData.bank_ac}
            onChange={(e) => {setOdData({...odData, bank_ac: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Bank Account Number"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Avialable Balance
            </label>
            <input
            value={odData.avialable_balance}
            onChange={(e) => {setOdData({...odData, avialable_balance: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Avialable Balance"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
              value={odData.email_id}
              onChange={(e) => {setOdData({...odData, email_id: e.target.value})}}
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
              value={odData.phone_number}
              onChange={(e) => {setOdData({...odData, phone_number: e.target.value})}}
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
              value={odData.aadhar_no}
              onChange={(e) => {setOdData({...odData, aadhar_no: e.target.value})}}
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
              value={odData.pan_no}
              onChange={(e) => {setOdData({...odData, pan_no: e.target.value})}}
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
            value={odData.name_of_entrepreneur}
            onChange={(e) => {setOdData({...odData, name_of_entrepreneur: e.target.value})}}
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
            value={odData.father_name}
            onChange={(e) => {setOdData({...odData, father_name: e.target.value})}}
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
            value={odData.date_of_birth}
            onChange={(e) => {setOdData({...odData, date_of_birth: e.target.value})}}
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
            value={odData.social_category_entrepreneur}
            onChange={(e) => {setOdData({...odData, social_category_entrepreneur: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Social Category of Entrepreneur"
            />
          </div>
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              name="gender"
              value={odData.gender}
            onChange={(e) => {setOdData({...odData, gender: e.target.value})}}
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
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              name="physicallyHandicapped"
              value={odData.physically_handicapped}
  onChange={(e) => {setOdData({...odData, physically_handicapped: e.target.value})}}
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
            value={odData.name_of_enterprise}
            onChange={(e) => {setOdData({...odData, name_of_enterprise: e.target.value})}}
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
            value={odData.type_of_org}
            onChange={(e) => {setOdData({...odData, type_of_org: e.target.value})}}
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
            value={odData.r_village}
            onChange={(e) => {setOdData({...odData, r_village: e.target.value})}}
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
            value={odData.r_block}
            onChange={(e) => {setOdData({...odData, r_block: e.target.value})}}
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
            value={odData.r_city}
            onChange={(e) => {setOdData({...odData, r_city: e.target.value})}}
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
            value={odData.r_district}
            onChange={(e) => {setOdData({...odData, r_district: e.target.value})}}
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
            value={odData.r_state}
            onChange={(e) => {setOdData({...odData, r_state: e.target.value})}}
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
            value={odData.r_pincode}
            onChange={(e) => {setOdData({...odData, r_pincode: e.target.value})}}
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
            value={odData.o_village}
            onChange={(e) => {setOdData({...odData, o_village: e.target.value})}}
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
            value={odData.o_block}
            onChange={(e) => {setOdData({...odData, o_block: e.target.value})}}
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
            value={odData.o_city}
            onChange={(e) => {setOdData({...odData, o_city: e.target.value})}}
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
            value={odData.o_district}
            onChange={(e) => {setOdData({...odData, o_district: e.target.value})}}
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
            value={odData.o_state}
            onChange={(e) => {setOdData({...odData, o_state: e.target.value})}}
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
            value={odData.o_pincode}
            onChange={(e) => {setOdData({...odData, o_pincode: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Pin Code"
            />
          </div>

          <h2 className="underline font-semibold mb-4">Bank Account opening Details:-</h2>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Relationship with nominee
            </label>
            <input
            value={odData.relationship_nominee}
            onChange={(e) => {setOdData({...odData, relationship_nominee: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Relationship with nominee"
            />
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Nominee name
            </label>
            <input
            value={odData.nominee_name}
            onChange={(e) => {setOdData({...odData, nominee_name: e.target.value})}}
              type="text"
              className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
              placeholder="Nominee name"
            />
          </div>

         
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Upload Picture
            </label>
            <input 
            type="file" 
            className="mt-1 block w-full" 
            // onChange={handleImageChange}
            onChange={(e) => setOdData({...odData, image1: e.target.files[0]})}

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
            // onChange={(e) => handleImageChange(e, "image2")}            
            onChange={(e) => setOdData({...odData, image2: e.target.files[0]}) }          
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