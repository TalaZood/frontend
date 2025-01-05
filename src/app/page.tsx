"use client";

import { isClientSide } from "@/utils/environment";

export default function Home() {
  const onExpand = () => {
    if (!isClientSide()) {
      return;
    }

    window.Eitaa.WebApp.expand();
  };

  return (
    <main className="h-svh bg-black text-white">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">TALAZOOD</h1>
        <span className="text-gray-400 mt-4">COMING SOON</span>
        <button
          onClick={onExpand}
          className="border border-white py-4 px-12 mt-16"
        >
          Expand Button
        </button>
      </div>
    </main>
  );
}
