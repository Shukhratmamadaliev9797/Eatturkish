import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import { staffsignin } from "../../actions/staffActions";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const staffSignIn = useSelector((state) => state.staffSignIn);
  const { staffInfo, loading, error, success } = staffSignIn;
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(staffsignin(email, password));
  };

  const notify = (message) => toast.error(message);

  useEffect(() => {
    if (error) {
      notify(error);
    }
    if (staffInfo) {
      if (staffInfo.isAdmin === true || staffInfo.isStaff === true) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [staffInfo, navigate, error]);

  return (
    <div className="login">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        className="snackbar"
      />
      {/* {loading && <AdminLoader text="Checking Details..." />} */}
      <div className="login__container">
        <form className="login__form" onSubmit={submitHandler}>
          <h3>Sign in</h3>
          <div className="login__form-inputBox">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Addres"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__form-inputBox">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">
            {loading ? (
              <Oval
                height={20}
                width={20}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
