import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { updateUser } from "../../actions/userActions";

export default function EditUser({ user, closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();

  const notifyError = (message) => toast.error(message);
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setEmail(user.email);
      setAddress(user.address);
    }
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword === confirmNewPassword) {
      dispatch(
        updateUser(
          user._id,
          firstName,
          lastName,
          phone,
          email,
          address,
          newPassword
        )
      );
    } else {
      notifyError("Password does not match, please check");
    }
  };

  return (
    <div className="addNewStaff">
      <ToastContainer
        position="bottom-left"
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
      <div className="addNewStaff__box">
        <div className="addNewStaff__box-title">
          <h2>Update User Details</h2>
          <i onClick={closeModal} class="fas fa-times icon"></i>
        </div>
        <form onSubmit={submitHandler}>
          <div className="addNewStaff__inputBox2">
            <div>
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="addNewStaff__inputBox2">
            <div>
              <label htmlFor="">Mobile</label>
              <input
                type="text"
                placeholder="Mobile"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="addNewStaff__inputBox2">
            <div>
              <label htmlFor="">New Password</label>
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Confirm New Password</label>
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="addNewStaff__inputBox1">
            <label htmlFor="">Address</label>
            <textarea
              name=""
              id=""
              cols="10"
              rows="5"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
