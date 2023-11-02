"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const CardBruno = (props) => {

  const router =useRouter();

  const [isClick, setClick] = useState(false);

  const toggleClick = () => {
    setClick(!isClick);
    
  };


    return (
        <div className="p-3 md:w-auto  flex-col text-center items-center bg-opacity-100 bg-white m-4 rounded-md ">
          <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 my-3 flex-shrink-0 ">
           <Image
           width={60}
           height={60}
           src={props.imagen}
           />
          </div>

          <div className="flex-grow  ">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              {props.nombre}
            </h2>
            <p className="leading-relaxed text-base">
              {props.descripcion}
            </p>
            <Link 
            href={'Example'}
            className={`mt-3 text-indigo-500 inline-flex items-center hover:text-indigo-300 cursor-pointer`}
             >
              Leer más
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`w-4 h-4 ml-2`}
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>

        </div>

        
        
    )
}

export default CardBruno