"use client";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router"; 
import { useAdmin } from "@/context/AdminContext"; // import the context
import AdminLogin from "./admin-login"; // import the login page

export default function MemberLogin() {
  const router = useRouter();
  const [members, setMembers] = useState([]);
  const [oneMember, setOneMember] = useState({});
  const {login, setEditMember } = useAdmin(); // get the login state from the context
  const [visible, setVisible] = useState(false);

   

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateClick = (member) => {
    // router.push(`/update-member?id=${member._id}`);
    console.log("update button click on member login: " ,member);
    setEditMember(member);
    router.push(`/admin/update/Member`);
  };

  // get request to get all the members
  useEffect(() => {
    try {
      const fetchMembers = async () => {
        const response = await fetch(`/api/getMembers/route`);
        const data = await response.json();

        setMembers(data);
      };
      fetchMembers();
    } catch (error) {
      console.log(error);
    }
  });

  // delete request to delete a member
  const handleDelete = async (members) => {
    const hasConfirmed = confirm("Are you sure you want to delete?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/mb/${members._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = members.filter(
          (item) => item._id !== members._id
        );

        setMembers(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // update the visible status of the member
  const hadleVisible = async (member) => {
    try {
      if (visible) {
        // Unlike the post
        await axios.post('/api/visible', { id: member._id, visible: false });
      } else {
        // Like the post
        await axios.post('/api/invisible', { id: member._id, visible: true });
      }

      setVisible(!visible); // Toggle the like state in the UI
    } catch (error) {
      console.error('Error toggling visiblity:', error);
    }

  };
  

  if(!login){ // if the user is not logged in, show the login page
    return (
      <AdminLogin/>
    )
  }

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <h1>Member Login</h1>

        {/* add member button */}
        <Link
          className="btn-primary px-4 mb-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          href={"/admin/products/member"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </Link>
      </div>

      <table className="basic table-auto	">
        <thead>
          <tr>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>NAME</th>
            <th>AADHAAR NO.</th>
            <th>PAN NO.</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>

        {/* next row start */}
        <tbody>
          {members.length > 0 &&
            members.map((member) => (
              <tr key={member._id} className="my-4">
                <td>{member.omt_id}</td>
                <td>{member.password}</td>
                <td>{member.name_of_entrepreneur}</td>
                <td>{member.aadhar_no}</td>
                <td>{member.pan_no}</td>
                <td>
                  {/* status svg icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke= {member.visible ? "green" : "red"}
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => hadleVisible(member)}
                    
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </td>
               
                  <td>
                    {/* update svg icon */}

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="blue"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleUpdateClick(member)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </td>
                  <td>
                    {/* delete svg icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="red"
                      className="w-6 h-6 cursor-pointer"
                      onClick={() => handleDelete(member)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                
              </tr>
            ))}
        </tbody>
        <tbody></tbody>
      </table>
    </Layout>
  );
}
