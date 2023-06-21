'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const IndiividualProjectPage = () => {

  const router = useRouter();
  console.log("🚀 ~ file: page.tsx:8 ~ IndiividualProjectPage ~ router:", router)
  
  return (
    <div>IndiividualProjectPage</div>
  )
}

export default IndiividualProjectPage