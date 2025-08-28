import React from "react";
import { Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      {/* Nested routes will render here */}
      <Outlet />
    </div>
  );
}
