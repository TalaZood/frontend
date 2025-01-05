import { isDev } from "@/utils/environment";

export default function Home() {
  console.log("isDev", isDev());

  return (
    <main className="h-svh bg-black text-white">
      <div className="h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl font-bold">TALAZOOD</h1>
        <span className="text-gray-400 mt-4">COMING SOON</span>
      </div>
    </main>
  );
}
