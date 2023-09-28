import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import AdminLogin from "../../pages/admin/AdminLogin";

export default function AdminLoginInRoute() {
  const staffSignIn = useSelector((state) => state.staffSignIn);
  const { staffInfo } = staffSignIn;
  return staffInfo ? <Outlet /> : <AdminLogin />;
}
