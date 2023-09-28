import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  menuCategoriesReducer,
  menuCreateReducers,
  menuDeleteReducer,
  menuDetailsReducer,
  menuListReducer,
  menuPopularReducer,
  menuUpdateReducer,
} from "./reducers/menuReducers";
import {
  staffCreateReducers,
  staffDeleteReducer,
  staffDetailsReducer,
  staffListReducer,
  staffSignInReducers,
  staffUpdateReducer,
} from "./reducers/staffReducers";
import {
  updateProfileReducer,
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userRegisterReducers,
  userSignInReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  staffSignIn: {
    staffInfo: localStorage.getItem("staffInfo")
      ? JSON.parse(localStorage.getItem("staffInfo"))
      : null,
  },
};

const reducers = combineReducers({
  staffSignIn: staffSignInReducers,
  staffLists: staffListReducer,
  staffCreate: staffCreateReducers,
  staffDelete: staffDeleteReducer,
  staffUpdate: staffUpdateReducer,
  staffDetails: staffDetailsReducer,
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducers,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  updateProfile: updateProfileReducer,
  menuCreate: menuCreateReducers,
  menuList: menuListReducer,
  menuDelete: menuDeleteReducer,
  menuUpdate: menuUpdateReducer,
  menuDetails: menuDetailsReducer,
  menuCategories: menuCategoriesReducer,
  menuPopular: menuPopularReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
