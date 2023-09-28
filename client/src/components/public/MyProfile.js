import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsUser, updateUserProfile } from "../../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../../contants/userConstants";
import { Oval } from "react-loader-spinner";

export default function MyProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const dispatch = useDispatch();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const userDetails = useSelector((state) => state.userDetails);
  const { loading: loadingUser, error: errorUser, user } = userDetails;

  const updateProfile = useSelector((state) => state.updateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = updateProfile;

  useEffect(() => {
    document.title = "Profile";
    if (!user || successUpdate) {
      dispatch(detailsUser(userInfo._id));
      setTimeout(() => {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
      }, 2000);
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
    }
  }, [dispatch, user, userInfo, successUpdate]);

  const submitHanlder = (e) => {
    e.preventDefault();
    if (password !== confirmNewPassword) {
      alert("password does not match");
    }
    dispatch(
      updateUserProfile({
        userId: user._id,
        firstName,
        lastName,
        email,
        phone,
        address,
        password,
      })
    );
  };

  return (
    <div className="myProfile">
      <div className="myProfile__title">
        <h2>My Profile</h2>
        <h2>Hello {userInfo.firstName}</h2>
      </div>
      <form onSubmit={submitHanlder}>
        <div className="myProfile__inputBox2">
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="myProfile__inputBox2">
          <div>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="myProfile__inputBox2">
          <div>
            <label htmlFor="">New Password</label>
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">Confirm New Password</label>
            <input
              type="text"
              placeholder="Confirm New Password"
              value={confirmNewPassword}
              onChange={(e) => {
                setConfirmNewPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="myProfile__inputBox1">
          <label htmlFor="">Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className="myProfile__button">
          <button
            type="submit"
            className={`${successUpdate ? "myProfile__successUpdate" : ""}`}
          >
            {loadingUpdate ? (
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
            ) : successUpdate ? (
              "Updated successfully"
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
