import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { staffsignout } from "../../actions/staffActions";
export default function Navbar() {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(staffsignout());
  };
  return (
    <div className="adminNavbar">
      <div className="adminNavbar__container">
        <ul className="adminNavbar__menu">
          <li>
            <NavLink
              className={(isActive) => (!isActive ? "" : "active")}
              to="/admin"
            >
              <i class="fas fa-home adminNavbar__icon"></i>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/staff">
              <i class="fas fa-users adminNavbar__icon"></i>
              <span>Staff</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/costumers">
              <i class="fas fa-user-friends adminNavbar__icon"></i>
              <span>Costumers</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/menu">
              <i class="fas fa-bars adminNavbar__icon"></i>
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/orders">
              <i class="fas fa-utensils adminNavbar__icon"></i>
              <span>Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/news">
              <i class="far fa-newspaper adminNavbar__icon"></i>
              <span>News</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/status">
              <i class="fas fa-check adminNavbar__icon"></i>
              <span>Order Status</span>
            </NavLink>
          </li>
          <li>
            <button onClick={signOutHandler}>
              <i class="fas fa-sign-out-alt"></i>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
