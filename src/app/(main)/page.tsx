"use client";
import Link from "next/link";

const Home = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return (
    <div className="">
      <h1 className="text-9xl  mb-10">Home Page</h1>
      <div className="flex gap-5">
        <Link href={"/articles/breaking-news-123?lang=en"}>
          Read In English
        </Link>
        <Link href={"/articles/breaking-news-123?lang=fr"}>Read In French</Link>
      </div>
    </div>
  );
};

export default Home;
