import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="">
      <section className="bg-software-imagen  h-auto  pb-20 overflow-hidden  "  >

        <div className="flex flex-shrink">
          <div className="flex flex-col justify-start ml-10 max-w-2xl">
            <h1 className="text-black text-4xl mt-20">Welcome to my personal page</h1>
            <h2 className="text-gray-900 text-xl mt-5">Como desarrollador frontend con una pasión por la creación de experiencias de usuario excepcionales.</h2>

            <div className="flex flex-shrink-0">


              <Link

                href={'https://wa.me/5492613998137'}
                target="blank"
                type="button"
                className=" duration-100 ease-in text-white bg-black font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 mb-auto hover:rounded-md hover:bg-green-300 hover:text-black w-min mr-5"
              >
                Contactar
              </Link>

              <Link

                href={'https://wa.me/5492613998137'}
                target="blank"
                type="button"
                className=" duration-100 ease-in text-white bg-black font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2 mb-auto hover:rounded-md hover:bg-green-300 hover:text-black w-auto"
              >
                Mis proyectos
              </Link>
            </div>

          </div>




          <Image
            className=""
            src={'me.svg'}
            width={400}
            height={400}
          />


        </div>
      </section>
    </div>


  );
};

export default Hero;
