import React from "react";
import Navbar from "../../components/public/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/public/Footer";

export default function PublicLayout() {
  return (
    <div className="public">
      <div className="public__navbar">
        <Navbar />
      </div>
      <div className="public__body">
        <Outlet />
      </div>
    </div>
  );
}
