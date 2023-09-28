import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddMenu from "../../modals/admin/AddMenu";
import { ToastContainer, toast } from "react-toastify";
import {
  MENU_CREATE_RESET,
  MENU_DELETE_RESET,
  MENU_UPDATE_RESET,
} from "../../contants/menuConstants";
import AdminLoader from "./AdminLoader";
import { deleteMenu, listMenu } from "../../actions/menuActions";
import UpdateMenu from "../../modals/admin/UpdateMenu";
import Delete from "../../modals/admin/Delete";

export default function AdminMenu() {
  const [addMenu, setAddMenu] = useState(false);
  const [updateMenu, setUpdateMenu] = useState(false);
  const [deleteMenus, setDeleteMenu] = useState(false);
  const [menu, setMenu] = useState();
  const [name, setName] = useState("All");

  const dispatch = useDispatch();

  const menuList = useSelector((state) => state.menuList);
  const { loading: listLoading, error: listError, menuLists } = menuList;

  const menuCreate = useSelector((state) => state.menuCreate);
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
    successMessage,
  } = menuCreate;

  const menuUpdate = useSelector((state) => state.menuUpdate);
  const {
    loading: updateLoading,
    error: updateError,
    success: updateSuccess,
    successUpdateMessage,
  } = menuUpdate;

  const menuDelete = useSelector((state) => state.menuDelete);
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
    successDeleteMessage,
  } = menuDelete;

  const notifyError = (message) => toast.error(message);
  const notifySuccessDelete = (message) => toast.success(message);
  const notifySuccessUpdate = (message) => toast.success(message);
  const notifySuccessCreate = (message) => toast.success(message);

  useEffect(() => {
    dispatch(listMenu({ name: name !== "All" ? name : "" }));

    if (createError || updateError || deleteError) {
      notifyError(createError || updateError || deleteError);
    }
    if (createSuccess) {
      setAddMenu(false);
      notifySuccessCreate(successMessage);
      dispatch({ type: MENU_CREATE_RESET });
    }
    if (updateSuccess) {
      setUpdateMenu(false);
      notifySuccessUpdate(successUpdateMessage);
      dispatch({ type: MENU_UPDATE_RESET });
    }
    if (deleteSuccess) {
      setDeleteMenu(false);
      notifySuccessDelete(successDeleteMessage);
      dispatch({ type: MENU_DELETE_RESET });
    }
  }, [
    createSuccess,
    dispatch,
    successMessage,
    createError,
    updateError,
    deleteError,
    updateSuccess,
    successUpdateMessage,
    deleteSuccess,
    successDeleteMessage,
    name,
  ]);

  const menuDeleteHandler = (staff) => {
    dispatch(deleteMenu(staff._id));
  };

  return (
    <div className="adminMenu">
      {createLoading && <AdminLoader />}
      {updateLoading && <AdminLoader />}
      {deleteLoading && <AdminLoader />}
      <ToastContainer
        position="top-center"
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
      {addMenu ? <AddMenu closeModal={() => setAddMenu(false)} /> : ""}
      {updateMenu ? (
        <UpdateMenu closeModal={() => setUpdateMenu(false)} menu={menu} />
      ) : (
        ""
      )}
      {deleteMenus ? (
        <Delete
          heading="Delete Staff Details"
          body="Are you sure to delete staff?"
          closeModal={() => setDeleteMenu(false)}
          deleteHandler={() => menuDeleteHandler(menu)}
        />
      ) : (
        ""
      )}
      <div className="adminMenu__container">
        <div className="adminMenu__title">
          <span>
            All Menu | <i class="fas fa-home "></i>
          </span>{" "}
          / Home / Menu
        </div>
        <div className="adminMenu__filter">
          <span>All Menu Information</span>
          <form action="">
            <input
              type="text"
              placeholder="Search by name"
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <button onClick={() => setAddMenu(true)}>Add new menu</button>
        </div>
        <div>
          {listLoading ? (
            "loading"
          ) : listError ? (
            listError
          ) : (
            <div className="adminMenu__list">
              {menuLists.map((menu) => {
                return (
                  <div className="adminMenu__list-menu">
                    <img src={menu.image} alt="" />
                    <div className="adminMenu__list-menu-content">
                      <h3>{menu.name}</h3>
                      <p>{menu.description.substring(0, 150)}</p>
                      <span>
                        <b>Price:</b> £ {menu.price}
                      </span>
                      <div>
                        <button
                          onClick={() => {
                            setMenu(menu);
                            setUpdateMenu(true);
                          }}
                        >
                          Update
                        </button>
                        <button
                          onClick={() => {
                            setMenu(menu);
                            setDeleteMenu(true);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
