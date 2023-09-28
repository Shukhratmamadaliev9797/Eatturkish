import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateStaff } from "../../actions/staffActions";
import { ToastContainer, toast } from "react-toastify";

export default function EditStaff({ staff, closeModal }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [address, setAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();

  const notifyError = (message) => toast.error(message);
  useEffect(() => {
    if (staff) {
      setFirstName(staff.firstName);
      setLastName(staff.lastName);
      setPhone(staff.phone);
      setJoiningDate(staff.joiningDate);
      setEmail(staff.email);
      setDesignation(staff.designation);
      setIsStaff(staff.isStaff);
      setIsAdmin(staff.isAdmin);
      setAddress(staff.address);
    }
  }, [staff]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (newPassword === confirmNewPassword) {
      dispatch(
        updateStaff(
          staff._id,
          firstName,
          lastName,
          phone,
          joiningDate,
          email,
          designation,
          isStaff,
          isAdmin,
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
          <h2>Update Staff Details</h2>
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
              <label htmlFor="">Joining date</label>
              <input
                type="date"
                placeholder="Full Name"
                value={joiningDate}
                onChange={(e) => setJoiningDate(e.target.value)}
              />
            </div>
          </div>
          <div className="addNewStaff__inputBox2">
            <div>
              <label htmlFor="">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Designation</label>
              <select
                name=""
                id=""
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              >
                <option value="" disabled hidden selected>
                  Choose role
                </option>
                <option value="cook">Cook</option>
                <option value="waiter">Waiter</option>
                <option value="manager">Manager</option>
              </select>
            </div>
          </div>
          <div className="addNewStaff__inputBox2">
            <div>
              <label htmlFor="">Is Staff</label>
              <input
                type="checkbox"
                value={isStaff}
                onChange={(e) => setIsStaff(e.target.checked)}
              />
            </div>
            <div>
              <label htmlFor="">Is Admin</label>
              <input
                type="checkbox"
                value={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
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
