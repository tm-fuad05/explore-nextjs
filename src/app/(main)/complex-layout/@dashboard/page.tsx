import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center gap-3 border-2 p-20">
      <h1>Dashoboard</h1>

      <Link className="text-blue-400" href={"/complex-layout/settings"}>
        {" "}
        Settings
      </Link>
    </div>
  );
};

export default Dashboard;
