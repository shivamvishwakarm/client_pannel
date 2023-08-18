// "use client"
import Layout from "@/components/Layout";
// import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const userRole = "od";

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