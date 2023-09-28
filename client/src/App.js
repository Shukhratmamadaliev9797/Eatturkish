import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLoginInRoute from "./components/admin/AdminLoginInRoute";
import AdminNotLoginInRoute from "./components/admin/AdminNotLoginInRoute";
import AdminHome from "./pages/admin/AdminHome";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.scss";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "video-react/dist/video-react.css";
import AdminStaff from "./pages/admin/AdminStaff";
import AdminCostumers from "./pages/admin/AdminCostumers";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminNews from "./pages/admin/AdminNews";
import AdminStatus from "./pages/admin/AdminStatus";
import AdminSetting from "./pages/admin/AdminMenu";
import PublicLayout from "./pages/public/PublicLayout";
import Home from "./pages/public/Home";
import LoginInRoute from "./components/public/LoginInRoute";
import ProfileLayout from "./pages/public/ProfileLayout";
import MyProfile from "./components/public/MyProfile";
import MyCart from "./components/public/MyCart";
import MyMenu from "./components/public/MyMenu";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminLoginInRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="/admin/staff" element={<AdminStaff />} />
            <Route path="/admin/costumers" element={<AdminCostumers />} />
            <Route path="/admin/menu" element={<AdminSetting />} />
            <Route path="/admin/orders" element={<AdminOrders />} />
            <Route path="/admin/news" element={<AdminNews />} />
            <Route path="/admin/status" element={<AdminStatus />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route element={<AdminNotLoginInRoute />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route element={<LoginInRoute />}>
            <Route path="/profile" element={<ProfileLayout />}>
              <Route index element={<MyProfile />} />
              <Route path="/profile/cart" element={<MyCart />} />
              <Route path="/profile/menu" element={<MyMenu />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
