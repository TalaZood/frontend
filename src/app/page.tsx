"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Expand mini app bottom-sheet on app open
    setTimeout(() => {
      window.Eitaa.WebApp.expand();
    }, 250);
  }, []);

  return (
    <Container className="">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">TALAZOOD</h1>
        <span className="text-gray-400 mt-4">COMING SOON</span>
      </div>
    </Container>
  );
}
