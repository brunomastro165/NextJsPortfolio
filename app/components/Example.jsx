"use client";

import { useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const valor = useSearchParams();
  return (
    <div>TestPage
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
      <div>TestPage</div>
    </div>
    
  )
}

export default page