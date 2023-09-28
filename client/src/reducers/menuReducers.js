import {
  MENU_CATEGORIES_LIST_FAIL,
  MENU_CATEGORIES_LIST_REQUEST,
  MENU_CATEGORIES_LIST_SUCCESS,
  MENU_CREATE_FAIL,
  MENU_CREATE_REQUEST,
  MENU_CREATE_RESET,
  MENU_CREATE_SUCCESS,
  MENU_DELETE_FAIL,
  MENU_DELETE_REQUEST,
  MENU_DELETE_RESET,
  MENU_DELETE_SUCCESS,
  MENU_DETAILS_FAIL,
  MENU_DETAILS_REQUEST,
  MENU_DETAILS_SUCCESS,
  MENU_LIST_FAIL,
  MENU_LIST_REQUEST,
  MENU_LIST_SUCCESS,
  MENU_POPULAR_LIST_FAIL,
  MENU_POPULAR_LIST_REQUEST,
  MENU_POPULAR_LIST_SUCCESS,
  MENU_UPDATE_FAIL,
  MENU_UPDATE_REQUEST,
  MENU_UPDATE_RESET,
  MENU_UPDATE_SUCCESS,
} from "../contants/menuConstants";

export const menuCreateReducers = (state = { success: false }, action) => {
  switch (action.type) {
    case MENU_CREATE_REQUEST:
      return { loading: true };
    case MENU_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        successMessage: action.payload.message,
      };
    case MENU_CREATE_FAIL:
      return { loading: false, error: action.payload.message };
    case MENU_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const menuListReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case MENU_LIST_REQUEST:
      return { loading: true };
    case MENU_LIST_SUCCESS:
      return { loading: false, menuLists: action.payload };
    case MENU_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuCategoriesReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case MENU_CATEGORIES_LIST_REQUEST:
      return { loading: true };
    case MENU_CATEGORIES_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case MENU_CATEGORIES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuPopularReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case MENU_POPULAR_LIST_REQUEST:
      return { loading: true };
    case MENU_POPULAR_LIST_SUCCESS:
      return { loading: false, popularDishes: action.payload };
    case MENU_POPULAR_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const menuDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case MENU_DELETE_REQUEST:
      return { loading: true };
    case MENU_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        successDeleteMessage: action.payload.message,
      };
    case MENU_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case MENU_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const menuUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case MENU_UPDATE_REQUEST:
      return { loading: true };
    case MENU_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        successUpdateMessage: action.payload.message,
      };
    case MENU_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case MENU_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const menuDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case MENU_DETAILS_REQUEST:
      return { loading: true };
    case MENU_DETAILS_SUCCESS:
      return { loading: false, activity: action.payload };
    case MENU_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
