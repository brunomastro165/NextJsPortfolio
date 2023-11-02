"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

// Define un componente de React llamado Navbar.
const Navbar = () => {
  // Utiliza el estado 'isClick' para controlar si el menú desplegable está abierto o cerrado.
  const [isClick, setisClick] = useState(false);

  // Función para alternar el estado del menú desplegable.
  const toggleNavbar = () => {
    setisClick(!isClick);
  };

  const [open, setOpen] = useState(false);

  const Menu1 = [
    "Bioingeniería",
    "Ciberseguridad",
    "Desarrollo de Software",
    "Marketing digital",
    "Diseño",
  ];

  const [openProyectos, setOpenProyectos] = useState(false);

  const MenuProyectos = [
    "Comunidad de salud",
    "Central de turnos",
    "ChatBot",
    "Yendo",
    "Business WhatsApp",
  ];

  const icono = openProyectos ? "FiChevronUp" : "FiChevronDown";

  // Renderiza la estructura de la barra de navegación.
  return (
    <>
      <nav className="bg-[#FFFFFF] border-black w-full fixed z-50 border-b-2">
        {/* Barra de navegación con un fondo azul. */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contenedor que limita el ancho de la barra de navegación. */}
          <div className="flex items-center justify-between h-16">
            {/* Contenedor para alinear elementos horizontalmente. */}
            <div className="flex items-center">
              {/* Contenedor para alinear elementos horizontalmente. */}
              <div className="flex-shrink-0">
                {/* Contenedor para la marca o logo del sitio. */}
                <Link href={"/"} className="text-lg text-black">
                  Logo
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              {/* Contenedor con enlaces visibles en pantallas medianas (md). */}
              <div className="ml-4 flex items-center space-x-4">
                {/* Enlaces de navegación */}
                <div className="relative group flex justify-center">
                  <span className="cursor-pointer items-start text-black">Quién soy</span>
                  <div
                    className={`absolute bg-black w-3 group-hover:w-full group-hover:bg-green-300  h-1 rounded-full mt-6 transition-width duration-200 `}
                  ></div>
                </div>

                <div className="relative group flex justify-center">
                  <span className="cursor-pointer items-start text-black">Proyectos</span>
                  <div
                    className={`absolute bg-black w-3 group-hover:w-full group-hover:bg-green-300 h-1 rounded-full mt-6 transition-width duration-200 `}
                  ></div>
                </div>

                <div className="relative group flex justify-center">
                  <span className="cursor-pointer items-start text-black">Mi CV</span>
                  <div
                    className={`absolute bg-black w-3 group-hover:w-full group-hover:bg-green-300  h-1 rounded-full mt-6 transition-width duration-200 `}
                  ></div>
                </div>
              </div>

            </div>
            <button
              type="button"
              className=" duration-100 ease-in text-white bg-black font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2  mt-auto mb-auto hover:py-3.5 hover:rounded-md hover:bg-green-300 hover:text-black"
            >
              Contactar
            </button>
            <div className="md:hidden flex items-center">
              {/* Contenedor con el botón del menú desplegable en pantallas pequeñas. */}
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {/* Botón con icono que cambia entre menú y "X" al hacer clic. */}
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* El siguiente bloque se muestra cuando el menú desplegable está abierto (isClick es true). */}
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              {/* Enlaces de navegación en el menú desplegable. */}
              <button className="text-black  hover:bg-black hover:bg-opacity-20 hover:text-black p-3 rounded-md">
                Quienes somos
              </button>
              <button className="text-black  hover:bg-black hover:bg-opacity-20 hover:text-black  p-3 rounded-md">
                Servicios
              </button>
              <button className="text-black  hover:bg-black hover:bg-opacity-20 hover:text-black  p-3 rounded-md">
                Productos
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

// Exporta el componente Navbar para su uso en otros lugares de la aplicación.
export default Navbar;
