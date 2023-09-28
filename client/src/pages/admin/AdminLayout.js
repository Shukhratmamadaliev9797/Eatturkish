import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/admin/Navbar";

export default function AdminLayout() {
  return (
    <div className="admin">
      <Navbar />
      <div className="admin__body">
        <Outlet />
      </div>
    </div>
  );
}
