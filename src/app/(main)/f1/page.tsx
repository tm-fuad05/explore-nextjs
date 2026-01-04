import Link from "next/link";

const f1 = () => {
  return (
    <div>
      <h1>Page F1</h1>
      <Link href={"/f1/f2"}>f2</Link>
      <Link href={"/f3"}>f3</Link>
      <Link href={"/f4"}>f4</Link>
    </div>
  );
};

export default f1;
