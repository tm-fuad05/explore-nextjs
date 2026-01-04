import Link from "next/link";
import Card from "./components/Card";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-9xl  mb-10">About Page</h1>

      <nav className="flex gap-5 border border-white  w-fit p-3">
        <Link href="/about/first-about">First</Link>
        <Link href="/about/second-about">Second</Link>
      </nav>
    </div>
  );
};

export default AboutPage;
