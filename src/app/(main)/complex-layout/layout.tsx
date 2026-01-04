import React from "react";

const ComplxLayout = ({
  children,
  dashboard,
  notification,
  profile,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  notification: React.ReactNode;
  profile: React.ReactNode;
}) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5">
        <div>{dashboard}</div>
        <div>{notification}</div>
      </div>

      <div className="flex flex-1">{profile}</div>
    </div>
  );
};

export default ComplxLayout;
