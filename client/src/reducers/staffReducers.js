import {
  STAFF_CREATE_FAIL,
  STAFF_CREATE_REQUEST,
  STAFF_CREATE_RESET,
  STAFF_CREATE_SUCCESS,
  STAFF_DELETE_FAIL,
  STAFF_DELETE_REQUEST,
  STAFF_DELETE_RESET,
  STAFF_DELETE_SUCCESS,
  STAFF_DETAILS_FAIL,
  STAFF_DETAILS_REQUEST,
  STAFF_DETAILS_RESET,
  STAFF_DETAILS_SUCCESS,
  STAFF_SIGNIN_FAIL,
  STAFF_SIGNIN_REQUEST,
  STAFF_SIGNIN_SUCCESS,
  STAFF_SIGNOUT,
  STAFF_UPDATE_FAIL,
  STAFF_UPDATE_REQUEST,
  STAFF_UPDATE_RESET,
  STAFF_UPDATE_SUCCESS,
  STAFF_LIST_FAIL,
  STAFF_LIST_REQUEST,
  STAFF_LIST_SUCCESS,
} from "../contants/staffConstants";

export const staffSignInReducers = (state = {}, action) => {
  switch (action.type) {
    case STAFF_SIGNIN_REQUEST:
      return { loading: true };
    case STAFF_SIGNIN_SUCCESS:
      return { loading: false, staffInfo: action.payload, success: true };
    case STAFF_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const staffListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case STAFF_LIST_REQUEST:
      return { loading: true };
    case STAFF_LIST_SUCCESS:
      return { loading: false, staffs: action.payload };
    case STAFF_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const staffCreateReducers = (state = { success: false }, action) => {
  switch (action.type) {
    case STAFF_CREATE_REQUEST:
      return { loading: true };
    case STAFF_CREATE_SUCCESS:
      return {
        loading: false,
        staff: action.payload,
        success: true,
        successCreateMessage: action.payload.message,
      };
    case STAFF_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const staffDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_DELETE_REQUEST:
      return { loading: true };
    case STAFF_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        successDeleteMessage: action.payload.message,
      };
    case STAFF_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const staffUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case STAFF_UPDATE_REQUEST:
      return { loading: true };
    case STAFF_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        successUpdateMessage: action.payload.message,
      };
    case STAFF_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const staffDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case STAFF_DETAILS_REQUEST:
      return { loading: true };
    case STAFF_DETAILS_SUCCESS:
      return { loading: false, staff: action.payload };
    case STAFF_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case STAFF_DETAILS_RESET:
      return { loading: true };
    default:
      return state;
  }
};
