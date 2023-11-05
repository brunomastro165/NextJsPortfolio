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
      link1: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion2: "ProyectosR2",
      link2: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion3: "ProyectosR3",
      link3: "https://github.com/brunomastro165/calculadoraLab3.git",
      imagen: "react.svg",
    },
    {
      id: 2,
      nombre: "NextJS",
      descripcion: "ProyectosR1",
      link1: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion2: "ProyectosR2",
      link2: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion3: "ProyectosR3",
      link3: "https://github.com/brunomastro165/calculadoraLab3.git",
      imagen: "nextjs.svg",
    },
    {
      id: 3,
      nombre: "Tailwind",
      descripcion: "ProyectosR1",
      link1: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion2: "ProyectosR2",
      link2: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion3: "ProyectosR3",
      link3: "https://github.com/brunomastro165/calculadoraLab3.git",
      imagen: "tailwind.svg",
    },
  ];

  const serviciosBack = [
    {
      id: 1,
      nombre: "Java",
      descripcion: "ProyectosR1",
      link1: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion2: "ProyectosR2",
      link2: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion3: "ProyectosR3",
      link3: "https://github.com/brunomastro165/calculadoraLab3.git",
      imagen: "java.svg",
    },
    {
      id: 2,
      nombre: "Python",
      descripcion: "Juego de Pool",
      link1: "https://github.com/brunomastro165/ThePoolProyect.git",
      descripcion2: "ProyectosR2",
      link2: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion3: "ProyectosR3",
      link3: "https://github.com/brunomastro165/calculadoraLab3.git",
      imagen: "python.svg",
    },
    {
      id: 3,
      nombre: "C#",
      descripcion: "Calculadora completa",
      link1: "https://github.com/brunomastro165/calculadoraLab3.git",
      descripcion2: "Contabilidad + blockchain",
      link2: "https://github.com/SR0jo/ProgramaContable.git",
      descripcion3: "?",
      link3: "https://github.com/brunomastro165/calculadoraLab3.git",
      imagen: "cs.svg",
    },
  ];

  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <section className={`text-gray-600 body-font transition-all duration-75 ${isClicked ? `bg-front bg-cover`:`bg-back bg-cover`}`}
       >
        <hr />
        <h1 className="flex justify-center text-2xl text-black font-semibold pt-5">Mis proyectos</h1>
        <div className="container px-5 pt-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-black mb-4 flex justify-center">
              <div
                className="relative group flex justify-center"
                onClick={() => setIsClicked(true)}
              >
                <span className="cursor-pointer items-start">FrontEnd</span>
                <div className={`absolute bg-green-300 w-3 group-hover:w-full h-1 rounded-full mt-10 transition-width duration-200  ${isClicked ? 'bg-green-300 w-full' : ''}`}></div>
              </div>

              <span className="mx-2"> | </span>

              <div
                className="relative group flex justify-center"
                onClick={() => setIsClicked(false)}
              >
                <span className="cursor-pointer items-start">BackEnd</span>
                <div className={`absolute bg-blue-300 w-3 group-hover:w-full  h-1 rounded-full mt-10 transition-width duration-200  ${isClicked ? '' : 'bg-blue-300 w-full'}`}></div>
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
                    link1={servicio.link1}
                    descripcion2={servicio.descripcion2}
                    link2={servicio.link2}
                    descripcion3={servicio.descripcion3}
                    link3={servicio.link3}
                    imagen={servicio.imagen}
                    
                  />
                ))
              : serviciosBack.map((servicio) => (
                  <CardBruno2
                    key={servicio}
                    nombre={servicio.nombre}
                    descripcion={servicio.descripcion}
                    link1={servicio.link1}
                    descripcion2={servicio.descripcion2}
                    link2={servicio.link2}
                    descripcion3={servicio.descripcion3}
                    link3={servicio.link3}
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
