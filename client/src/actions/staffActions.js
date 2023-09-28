import axios from "axios";
import {
  STAFF_CREATE_FAIL,
  STAFF_CREATE_REQUEST,
  STAFF_CREATE_SUCCESS,
  STAFF_DELETE_FAIL,
  STAFF_DELETE_REQUEST,
  STAFF_DELETE_SUCCESS,
  STAFF_DETAILS_FAIL,
  STAFF_DETAILS_REQUEST,
  STAFF_DETAILS_SUCCESS,
  STAFF_SIGNIN_FAIL,
  STAFF_SIGNIN_REQUEST,
  STAFF_SIGNIN_SUCCESS,
  STAFF_SIGNOUT,
  STAFF_UPDATE_FAIL,
  STAFF_UPDATE_REQUEST,
  STAFF_UPDATE_SUCCESS,
  STAFF_LIST_FAIL,
  STAFF_LIST_REQUEST,
  STAFF_LIST_SUCCESS,
} from "../contants/staffConstants";

export const staffsignin = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: STAFF_SIGNIN_REQUEST, payload: { email, password } });

    try {
      const { data } = await axios.post("/api/staff/signin", {
        email,
        password,
      });
      setTimeout(() => {
        dispatch({ type: STAFF_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem("staffInfo", JSON.stringify(data));
      }, 1000);
    } catch (error) {
      setTimeout(() => {
        dispatch({
          type: STAFF_SIGNIN_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }, 6000);
    }
  };
};

export const staffsignout = () => {
  return (dispatch) => {
    localStorage.removeItem("userInfo");
    dispatch({ type: STAFF_SIGNOUT });
  };
};

export const listStaff = ({ firstName = "" }) => {
  return async (dispatch, getState) => {
    dispatch({ type: STAFF_LIST_REQUEST });
    const {
      staffSignIn: { staffInfo },
    } = getState();
    try {
      const { data } = await axios.get(`/api/staff?firstName=${firstName}`, {
        headers: {
          Authorization: `Bearer ${staffInfo.token}`,
        },
      });

      dispatch({ type: STAFF_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: STAFF_LIST_FAIL, payload: message });
    }
  };
};

export const createStaff = (
  firstName,
  lastName,
  phone,
  joiningDate,
  email,
  designation,
  isStaff,
  isAdmin,
  address,
  password
) => {
  return async (dispatch) => {
    dispatch({
      type: STAFF_CREATE_REQUEST,
      payload: {
        firstName,
        lastName,
        phone,
        joiningDate,
        email,
        designation,
        isStaff,
        isAdmin,
        address,
        password,
      },
    });
    try {
      const { data } = await axios.post("/api/staff/createStaff", {
        firstName,
        lastName,
        email,
        designation,
        joiningDate,
        phone,
        address,
        isStaff,
        isAdmin,
        password,
      });
      setTimeout(() => {
        dispatch({ type: STAFF_CREATE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      dispatch({
        type: STAFF_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const deleteStaff = (staffId) => {
  return async (dispatch, getState) => {
    dispatch({ type: STAFF_DELETE_REQUEST, payload: staffId });
    const {
      staffSignIn: { staffInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/staff/${staffId}`, {
        headers: { Authorization: `Bearer ${staffInfo.token}` },
      });
      setTimeout(() => {
        dispatch({ type: STAFF_DELETE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: STAFF_DELETE_FAIL, payload: message });
    }
  };
};

export const updateStaff = (
  staffId,
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
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: STAFF_UPDATE_REQUEST,
      payload: {
        staffId,
        firstName,
        lastName,
        phone,
        joiningDate,
        email,
        designation,
        isStaff,
        isAdmin,
        address,
        newPassword,
      },
    });
    const {
      staffSignIn: { staffInfo },
    } = getState();
    try {
      const { data } = await axios.put(
        `/api/staff/${staffId}`,
        {
          staffId,
          firstName,
          lastName,
          phone,
          joiningDate,
          email,
          designation,
          isStaff,
          isAdmin,
          address,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${staffInfo.token}` },
        }
      );
      setTimeout(() => {
        dispatch({ type: STAFF_UPDATE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: STAFF_UPDATE_FAIL, payload: message });
    }
  };
};

export const detailsStaff = (staffId) => {
  return async (dispatch, getState) => {
    dispatch({ type: STAFF_DETAILS_REQUEST, payload: staffId });
    const {
      staffSignIn: { staffInfo },
    } = getState();
    try {
      const { data } = await axios.get(`/api/staff/${staffId}`, {
        headers: { Authorization: `Bearer ${staffInfo.token}` },
      });
      dispatch({ type: STAFF_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.message && error.response?.data.message
          ? error.response.data?.message
          : error.message;
      dispatch({ type: STAFF_DETAILS_FAIL, payload: message });
    }
  };
};
