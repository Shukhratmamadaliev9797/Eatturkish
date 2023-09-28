import axios from "axios";
import {
  MENU_CATEGORIES_LIST_FAIL,
  MENU_CATEGORIES_LIST_REQUEST,
  MENU_CATEGORIES_LIST_SUCCESS,
  MENU_CREATE_FAIL,
  MENU_CREATE_REQUEST,
  MENU_CREATE_SUCCESS,
  MENU_DELETE_FAIL,
  MENU_DELETE_REQUEST,
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
  MENU_UPDATE_SUCCESS,
} from "../contants/menuConstants";

export const createMenu = (
  image,
  name,
  category,
  description,
  ingredients,
  price
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: MENU_CREATE_REQUEST,
      payload: {
        image,
        name,
        category,
        description,
        ingredients,
        price,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/menu/createMenu`, {
        image,
        name,
        category,
        description,
        ingredients,
        price,
      });
      setTimeout(() => {
        dispatch({ type: MENU_CREATE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: MENU_CREATE_FAIL, payload: message });
    }
  };
};

export const listMenu = ({ name = "", category = "" }) => {
  return async (dispatch) => {
    dispatch({ type: MENU_LIST_REQUEST });
    try {
      const { data } = await axios.get(
        `/api/menu?name=${name}&category=${category}`
      );

      dispatch({ type: MENU_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: MENU_LIST_FAIL, payload: error.message });
    }
  };
};

export const listMenuCategories = () => {
  return async (dispatch) => {
    dispatch({ type: MENU_CATEGORIES_LIST_REQUEST });
    try {
      const { data } = await axios.get(`/api/menu/categories`);

      dispatch({ type: MENU_CATEGORIES_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: MENU_CATEGORIES_LIST_FAIL, payload: error.message });
    }
  };
};

export const listMenuPopular = () => {
  return async (dispatch) => {
    dispatch({ type: MENU_POPULAR_LIST_REQUEST });
    try {
      const { data } = await axios.get(`/api/menu/popular`);

      dispatch({ type: MENU_POPULAR_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: MENU_POPULAR_LIST_FAIL, payload: error.message });
    }
  };
};

export const deleteMenu = (menuId) => {
  return async (dispatch, getState) => {
    dispatch({ type: MENU_DELETE_REQUEST, payload: menuId });
    const {
      staffSignIn: { staffInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/menu/${menuId}`, {
        headers: { Authorization: `Bearer ${staffInfo.token}` },
      });
      setTimeout(() => {
        dispatch({ type: MENU_DELETE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: MENU_DELETE_FAIL, payload: message });
    }
  };
};

export const updateMenu = (
  menuID,
  image,
  name,
  category,
  description,
  ingredients,
  price
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: MENU_UPDATE_REQUEST,
      payload: {
        image,
        name,
        category,
        description,
        ingredients,
        price,
      },
    });
    const {
      staffSignIn: { staffInfo },
    } = getState();
    try {
      const { data } = await axios.put(
        `/api/menu/${menuID}`,
        {
          image,
          name,
          category,
          description,
          ingredients,
          price,
        },
        {
          headers: { Authorization: `Bearer ${staffInfo.token}` },
        }
      );
      setTimeout(() => {
        dispatch({ type: MENU_UPDATE_SUCCESS, payload: data });
      }, 1000);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: MENU_UPDATE_FAIL, payload: message });
    }
  };
};

export const detailsMenu = (menuId) => {
  return async (dispatch) => {
    dispatch({ type: MENU_DETAILS_REQUEST, payload: menuId });
    try {
      const { data } = await axios.get(`/api/menu/${menuId}`);
      dispatch({ type: MENU_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: MENU_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
