import React from 'react'
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";


export const UpdateMember = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');

  return (
    <div>page {promptId}</div>
  )
}


export default UpdateMember;