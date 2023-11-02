
"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import Feature from "./components/Skills/Feature";
import Contact from "./components/Contact";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import {NextUIProvider} from "@nextui-org/react";


export default function Home() {
  return (
   
      <NextUIProvider>
      <Navbar />
      <Hero />
      <Feature />
      <Content />
      <Contact/>
      </NextUIProvider>
      
    
  );
}
