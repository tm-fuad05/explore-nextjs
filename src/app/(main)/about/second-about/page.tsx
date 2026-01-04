"use client";
import { useRouter } from "next/navigation";

const SecondAbout = () => {
  const router = useRouter();
  const handleback = () => {
    router.back();
  };

  return (
    <div>
      <h1 className=" text-8xl">Second About</h1>
      <button onClick={handleback}>Back</button>
    </div>
  );
};

export default SecondAbout;
