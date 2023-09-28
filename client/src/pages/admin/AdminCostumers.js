import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminLoader from "./AdminLoader";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../../modals/admin/Delete";
import { deleteUser, listUsers } from "../../actions/userActions";
import {
  USER_DELETE_RESET,
  USER_UPDATE_RESET,
} from "../../contants/userConstants";
import EditUser from "../../modals/admin/EditUser";

export default function AdminStaff() {
  const [deleteUserModal, setDeleteUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [firstName, setFirstName] = useState("All");
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
    successDeleteMessage,
  } = userDelete;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    successUpdateMessage,
  } = userUpdate;

  const notifyError = (message) => toast.error(message);
  const notifySuccessDelete = (message) => toast.success(message);
  const notifySuccessUpdate = (message) => toast.success(message);

  useEffect(() => {
    dispatch(listUsers({ firstName: firstName !== "All" ? firstName : "" }));
    if (error || errorDelete || errorUpdate) {
      notifyError(error || errorDelete || errorUpdate);
    }

    if (successDelete) {
      setDeleteUserModal(false);
      notifySuccessDelete(successDeleteMessage);
      dispatch({ type: USER_DELETE_RESET });
    }
    if (successUpdate) {
      setEditUserModal(false);
      notifySuccessUpdate(successUpdateMessage);
      dispatch({ type: USER_UPDATE_RESET });
    }
  }, [
    dispatch,
    error,
    errorDelete,
    errorUpdate,
    successDelete,
    successUpdate,
    successDeleteMessage,
    successUpdateMessage,
    firstName,
  ]);

  const userDeleteHandler = (user) => {
    dispatch(deleteUser(user._id));
  };

  return (
    <div className="adminStaff">
      {loadingDelete && <AdminLoader text="Deleting user details..." />}
      {loadingUpdate && <AdminLoader text="Updating user details..." />}
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

      {deleteUserModal ? (
        <Delete
          heading="Delete User Details"
          body="Are you sure to delete user?"
          closeModal={() => setDeleteUserModal(false)}
          deleteHandler={() => userDeleteHandler(user)}
        />
      ) : (
        ""
      )}
      {editUserModal ? (
        <EditUser closeModal={() => setEditUserModal(false)} user={user} />
      ) : (
        ""
      )}

      <div className="adminStaff__container">
        <div className="adminStaff__title">
          <span>
            All Users | <i class="fas fa-home "></i>
          </span>{" "}
          / Home / users
        </div>
        <div className="adminStaff__tableContainer">
          <div className="adminStaff__tableFilter">
            <span>
              <b>Costumers Information</b>
            </span>
            <form action="">
              <input
                type="text"
                placeholder="Search by name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </form>
          </div>
          <table className="adminStaff__table">
            <tr className="adminStaff__tableHead">
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            {loading ? (
              <AdminLoader text="Fetching user details..." />
            ) : error ? (
              error
            ) : (
              users.map((user) => {
                return (
                  <tr className="adminStaff__tableData">
                    <td>#{user._id.slice(0, 4)}</td>
                    <td>
                      <img
                        src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                        alt=""
                      />
                    </td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                      <i
                        class="far fa-edit icon"
                        onClick={() => {
                          setUser(user);
                          setEditUserModal(true);
                        }}
                      ></i>
                      <i
                        class="fas fa-trash-alt icon"
                        onClick={() => {
                          setUser(user);
                          setDeleteUserModal(true);
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
