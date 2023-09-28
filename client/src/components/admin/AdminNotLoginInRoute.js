import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminNotLoginInRoute() {
  const staffSignIn = useSelector((state) => state.staffSignIn);
  const { staffInfo } = staffSignIn;
  return staffInfo ? <Navigate to="/admin" /> : <Outlet />;
}
