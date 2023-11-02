"use client";
import React from "react";
import CardBruno2 from "./CardBruno2";
import { useState } from "react";


const Feature = () => {
  const serviciosFront = [
    {
      id: 1,
      nombre: "React",
      descripcion: "ProyectosR1",
      descripcion2: "ProyectosR2",
      descripcion3: "ProyectosR3",
      imagen: "react.svg",
    },
    {
      id: 2,
      nombre: "NextJS",
      descripcion: "ProyectosN1",
      descripcion2: "ProyectosN2",
      descripcion3: "ProyectosN3",
      imagen: "nextjs.svg",
    },
    {
      id: 3,
      nombre: "Tailwind",
      descripcion: "ProyectosT1",
      descripcion2: "ProyectosT2",
      descripcion3: "ProyectosT3",
      imagen: "tailwind.svg",
    },
  ];

  const serviciosBack = [
    {
      id: 1,
      nombre: "Java",
      descripcion: "ProyectosR1",
      descripcion2: "ProyectosR2",
      descripcion3: "ProyectosR3",
      imagen: "java.svg",
    },
    {
      id: 2,
      nombre: "Python",
      descripcion: "ProyectosN1",
      descripcion2: "ProyectosN2",
      descripcion3: "ProyectosN3",
      imagen: "python.svg",
    },
    {
      id: 3,
      nombre: "C#",
      descripcion: "ProyectosT1",
      descripcion2: "ProyectosT2",
      descripcion3: "ProyectosT3",
      imagen: "cs.svg",
    },
  ];

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <section className="text-gray-600 body-font bg-feature bg-cover
      "
      >
        <hr />
        <h1>Opción 2</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4 flex justify-center">
              <div
                className="relative group flex justify-center"
                onClick={() => setIsClicked(true)}
              >
                <span className="cursor-pointer items-start">FrontEnd</span>
                <div className={`absolute bg-white w-3 group-hover:w-full h-1 rounded-full mt-10 transition-width duration-200  ${isClicked ? 'bg-green-400 w-full' : ''}`}></div>
              </div>

              <span className="mx-2"> | </span>

              <div
                className="relative group flex justify-center"
                onClick={() => setIsClicked(false)}
              >
                <span className="cursor-pointer items-start">BackEnd</span>
                <div className={`absolute bg-white w-3 group-hover:w-full  h-1 rounded-full mt-10 transition-width duration-200  ${isClicked ? '' : 'bg-green-400 w-full'}`}></div>
              </div>
            </h1>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
            {isClicked
              ? 
              serviciosFront.map((servicio) => (
                  <CardBruno2
                    key={servicio}
                    nombre={servicio.nombre}
                    descripcion={servicio.descripcion}
                    descripcion2={servicio.descripcion2}
                    descripcion3={servicio.descripcion3}
                    imagen={servicio.imagen}
                  />
                ))
              : serviciosBack.map((servicio) => (
                  <CardBruno2
                    key={servicio}
                    nombre={servicio.nombre}
                    descripcion={servicio.descripcion}
                    descripcion2={servicio.descripcion2}
                    descripcion3={servicio.descripcion3}
                    imagen={servicio.imagen}
                  />
                ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
