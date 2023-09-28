import React from "react";
import { NavLink } from "react-router-dom";

export default function ProfileNav() {
  return (
    <div className="profileNav">
      <ul className="profileNav__menu">
        <li>
          <NavLink to="/profile">
            <i class="fa-regular fa-user"></i> <span>My Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/cart">
            <i class="fa-solid fa-basket-shopping"></i> <span>My Cart</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/menu">
            <i class="fa-regular fa-bookmark"></i> <span>My Menu</span>
          </NavLink>
        </li>
      </ul>
      <div className="profileNav__logout">
        <i class="fa-solid fa-right-from-bracket"></i> Log out
      </div>
    </div>
  );
}
