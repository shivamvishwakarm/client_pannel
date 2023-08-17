// "use client"
import Layout from "@/components/Layout";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  // const { data: session } = useSession(); // Assuming useSession provides the session data
  const router = useRouter();
  const userRole = "od";

  // if (!session) {
  //   // User is not authenticated, redirect to OD login page
  //   console.log("User is not authenticated, redirect to OD login page")
  //   // router.push('/od/LoginForm');
  //   return null; // Render nothing while redirecting
  // }
  return (
    <Layout userRole={userRole}>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, OD👋 
        </h2>
        {/* <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          <Image  width={32} height={32}  alt="" className="w-6 h-6" />
          <span className="px-2">Hello user</span>
        </div> */}
      </div>
    </Layout>
  );
}


// src={session?.user?.image}
// {session?.user?.name}
{/* <b>{session?.user?.name}</b> */}