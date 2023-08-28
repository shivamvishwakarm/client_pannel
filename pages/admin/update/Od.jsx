import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useAdmin } from "@/context/AdminContext";
import Image from "next/image";

export function OdUpdate() {
  // saving form to database
  const router = useRouter();
  const { admin, setAdmin, editOd, setEditOd } = useAdmin();

  // console.log("od:", editOd);
  const [odData, setOdData] = useState({
    _id: editOd._id,
    customer_id: editOd.customer_id,
    password: editOd.password,
    bank_name: editOd.bank_name,
    branch_name: editOd.branch_name,
    bank_ac: editOd.bank_ac,
    avialable_balance: editOd.avialable_balance,
    email_id: editOd.email_id,
    phone_number: editOd.phone_number,
    aadhar_no: editOd.aadhar_no,
    pan_no: editOd.pan_no,
    name_of_entrepreneur: editOd.name_of_entrepreneur,
    father_name: editOd.father_name,
    date_of_birth: editOd.date_of_birth,
    social_category_entrepreneur: editOd.social_category_entrepreneur,
    gender: editOd.gender,
    physically_handicapped: editOd.physically_handicapped,
    name_of_enterprise: editOd.name_of_enterprise,
    r_village: editOd.r_village,
    r_block: editOd.r_block,
    r_city: editOd.r_city,
    r_district: editOd.r_district,
    r_state: editOd.r_state,
    r_pincode: editOd.r_pincode,
    o_village: editOd.o_village,
    o_block: editOd.o_block,
    o_city: editOd.o_city,
    o_district: editOd.o_district,
    o_state: editOd.o_state,
    o_pincode: editOd.o_pincode,
    relationship_nominee: editOd.relationship_nominee,
    nominee_name: editOd.nominee_name,
    image1: editOd.image1,
    image2: editOd.image2,
  });

// console.log("image2: ", editOd.image2);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/updateOd/route', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(odData),
      });

      if(response.ok) {
    
      const data = await response.json();
      console.log(data);
      // router.push("/admin/odLogin");

      } else {
        console.error("Failed to update od", response.statusText);
      }
    } catch (error) {
      console.error("Error while updating OD:", error);
      // Handle errors here
    }
  };

  const handleImage1Change = (e) => {
    const file = e.target.files[0];
    setOdData({ ...odData, image1: file }); // Use setOdData here
  };

  const handleImage2Change = (e) => {
    const file = e.target.files[0];
    setOdData({ ...odData, image2: file }); // And here
  };



  return (
    <Layout>


      <div className="flex ">
        <div className="max-w-md p-6  rounded-lg max-w-fit shadow-md ">

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Customer ID
                </label>
                <input
                  value={editOd.customer_id}
                  onChange={(e) => { setOdData({ ...odData, customer_id: e.target.value }) }}
                  type="text"
                  className="mt-1 disabled opacity-50 cursor-not-allowed  p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="Customer ID"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  PASSWORD
                </label>
                <input
                  value={editOd.password}
                  onChange={(e) => { setOdData({ ...odData, password: e.target.value }) }}
                  type="text"
                  className="mt-1 disabled opacity-50 cursor-not-allowed  p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="Password"
                />
              </div>
            </div>


            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Bank Name
              </label>
              <input
                value={odData?.bank_name || editOd.bank_name}
                onChange={(e) => { setOdData({ ...odData, bank_name: e.target.value }) }}
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
                value={odData?.branch_name || editOd.branch_name}
                onChange={(e) => { setOdData({ ...odData, branch_name: e.target.value }) }}
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
                value={odData?.bank_ac || editOd.bank_ac}
                onChange={(e) => { setOdData({ ...odData, bank_ac: e.target.value }) }}
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
                value={odData?.avialable_balance || editOd.avialable_balance}
                onChange={(e) => { setOdData({ ...odData, avialable_balance: e.target.value }) }}
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
                  value={editOd.email_id}
                  onChange={(e) => { setOdData({ ...odData, email_id: e.target.value }) }}
                  type="email"
                  className="mt-1 opacity-50 disabled cursor-not-allowed  p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                  placeholder="Email Id"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  value={odData?.phone_number || editOd.phone_number}
                  onChange={(e) => { setOdData({ ...odData, phone_number: e.target.value }) }}
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
                  value={odData?.aadhar_no || editOd.aadhar_no}
                  onChange={(e) => { setOdData({ ...odData, aadhar_no: e.target.value }) }}
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
                  value={odData?.pan_no || editOd.pan_no}
                  onChange={(e) => { setOdData({ ...odData, pan_no: e.target.value }) }}
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
                value={odData?.name_of_entrepreneur || editOd.name_of_entrepreneur}
                onChange={(e) => { setOdData({ ...odData, name_of_entrepreneur: e.target.value }) }}
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
                value={odData?.father_name || editOd.father_name}
                onChange={(e) => { setOdData({ ...odData, father_name: e.target.value }) }}
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
                value={odData?.date_of_birth || editOd.date_of_birth}
                onChange={(e) => { setOdData({ ...odData, date_of_birth: e.target.value }) }}
                type="type"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="YY-MM-DD"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Social Category of Entrepreneur
              </label>
              <input
                value={odData?.social_category_entrepreneur || editOd.social_category_entrepreneur}
                onChange={(e) => { setOdData({ ...odData, social_category_entrepreneur: e.target.value }) }}
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
                value={odData?.gender || editOd.gender}
                onChange={(e) => { setOdData({ ...odData, gender: e.target.value }) }}
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
                value={odData?.physically_handicapped || editOd.physically_handicapped}
                onChange={(e) => { setOdData({ ...odData, physically_handicapped: e.target.value }) }}
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
                value={odData?.name_of_enterprise || editOd.name_of_enterprise}
                onChange={(e) => { setOdData({ ...odData, name_of_enterprise: e.target.value }) }}
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
                value={odData?.type_of_org || editOd.type_of_org}
                onChange={(e) => { setOdData({ ...odData, type_of_org: e.target.value }) }}
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
                value={odData?.r_village || editOd.r_village}
                onChange={(e) => { setOdData({ ...odData, r_village: e.target.value }) }}
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
                value={odData?.r_block || editOd.r_block}
                onChange={(e) => { setOdData({ ...odData, r_block: e.target.value }) }}
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
                value={odData?.r_city || editOd.r_city}
                onChange={(e) => { setOdData({ ...odData, r_city: e.target.value }) }}
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
                value={odData?.r_district || editOd.r_district}
                onChange={(e) => { setOdData({ ...odData, r_district: e.target.value }) }}
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
                value={odData?.r_state || editOd.r_state}
                onChange={(e) => { setOdData({ ...odData, r_state: e.target.value }) }}
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
                value={odData?.r_pincode || editOd.r_pincode}
                onChange={(e) => { setOdData({ ...odData, r_pincode: e.target.value }) }}
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
                value={odData?.o_village || editOd.o_village}
                onChange={(e) => { setOdData({ ...odData, o_village: e.target.value }) }}
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
                value={odData?.o_block || editOd.o_block}
                onChange={(e) => { setOdData({ ...odData, o_block: e.target.value }) }}
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
                value={odData?.o_city || editOd.o_city}
                onChange={(e) => { setOdData({ ...odData, o_city: e.target.value }) }}
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
                value={odData?.o_district || editOd.o_district}
                onChange={(e) => { setOdData({ ...odData, o_district: e.target.value }) }}
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Distraict"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                State
              </label>
              <input
                value={odData?.o_state || editOd.o_state}
                onChange={(e) => { setOdData({ ...odData, o_state: e.target.value }) }}
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
                value={odData?.o_pincode || editOd.o_pincode}
                onChange={(e) => { setOdData({ ...odData, o_pincode: e.target.value }) }}
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
                value={odData?.relationship_nominee || editOd.relationship_nominee}
                onChange={(e) => { setOdData({ ...odData, relationship_nominee: e.target.value }) }}
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
                value={odData?.nominee_name || editOd.nominee_name}
                onChange={(e) => { setOdData({ ...odData, nominee_name: e.target.value }) }}
                type="text"
                className="mt-1 p-2 block w-full border rounded-md focus:ring focus:ring-indigo-300 focus:border-indigo-300"
                placeholder="Nominee name"
              />
            </div>

            {/*  Profile Image */}

            <div >
            <Image src={editOd?.image1} unoptimized={true} alt="Picture" width={48} height={48}  className="w-48 h-48 rectangle-full my-4 border-2	border-black	" />
              Image1 (Profile Image)
            </div>
            {/* <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Picture (Profile)
              </label>
              <input
                
                type="file" className="mt-1 block w-full"
                onChange={handleImage1Change}
              />
            </div> */}

            {/* uncomment if you want to add more upload input */}

            {/* Bank Logo Image */}


            {/* <div >
            <Image src={`/uploads/${editOd?.image2}`} unoptimized={true} alt="Logo" width={48} height={48}  className="w-48 h-48 rectangle-full border-2 my-4	border-black	" />
            </div>
            Image2 (Logo Image) */}


            {/* <div className="mt-4">
              <label className="text-sm font-medium text-gray-700">
                Picture (Logo)
              </label>
              <input
               
                type="file" className="mt-1 block w-full"
                onChange={handleImage2Change}
              />
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
    </Layout>
  );
}


export default OdUpdate;