// "use client"
import Layout from "@/components/Layout";
import { useAuth } from '@/context/AuthContext';
import Od_login from "./od-login";

export default function Home() {

  const {user, login} = useAuth(); // get the login state from the context

  const userRole = "od";
  
  // if the user is not logged in, show the login page
  if(!login) return (
    <Od_login />
  )

  return (
    <Layout userRole={userRole}>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, {user.name_of_entrepreneur}👋 
        </h2>
        {/* <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <Image  width={32} height={32}  alt="" className="w-6 h-6" />
          <span className="px-2">Hello user</span>
        </div> */}
      </div>
    </Layout>
  );
}
