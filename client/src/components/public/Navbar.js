import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Login from "../../modals/public/Login";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  useEffect(() => {
    if (userInfo) {
      setShow(false);
    }
  }, [userInfo]);

  return (
    <>
      <Login show={show} onHide={handleClose} />
      <div className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <NavLink to="/">Eaturkish</NavLink>
          </div>
          <ul className="navbar__menu">
            <li>
              <NavLink>Menu</NavLink>
            </li>
            <li>
              <NavLink>News</NavLink>
            </li>
            <li>
              <NavLink>About Us</NavLink>
            </li>
            <li>
              <NavLink>Contact Us</NavLink>
            </li>

            {userInfo ? (
              <li>
                <NavLink to="/profile" className="navbar__profileLink">
                  <i class="fa-regular fa-user"></i> {userInfo.firstName}
                </NavLink>
              </li>
            ) : (
              <li>
                <button onClick={handleShow}>Log In</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
