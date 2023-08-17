import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import {useState} from "react";
import Logo from "@/components/Logo";
import jwt from 'jsonwebtoken';
import { useEffect } from "react";



export default function Layout({children, userRole}) {
  const [showNav,setShowNav] = useState(false);
  // const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   // Retrieve the token from localStorage
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     try {
  //       // Verify and decode the JWT token
  //       const decodedToken = jwt.verify(token, 'apprequirepass');
  //       setUserData(decodedToken);
  //     } catch (error) {
  //       // Token is invalid or expired
  //       console.log("token is invalid or expired"  + error);
  //     }
  //   }
  // }, []);


  // console.log(userData);

  // userRole is a dummy variable for now
  const role = "od";

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo userRole={role}/>
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} userRole={role} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}