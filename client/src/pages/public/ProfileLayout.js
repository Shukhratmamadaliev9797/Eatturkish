import React from "react";
import ProfileNav from "../../components/public/ProfileNav";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div className="profileLayout">
      <div className="profileLayout__container">
        <div className="profileLayout__nav">
          <ProfileNav />
        </div>
        <div className="profileLayout__body">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
