import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStaff, listStaff } from "../../actions/staffActions";
import AddNewStaff from "../../modals/admin/AddNewStaff";
import AdminLoader from "./AdminLoader";
import { ToastContainer, toast } from "react-toastify";
import Delete from "../../modals/admin/Delete";
import {
  STAFF_CREATE_RESET,
  STAFF_DELETE_RESET,
  STAFF_UPDATE_RESET,
} from "../../contants/staffConstants";
import EditStaff from "../../modals/admin/EditStaff";

export default function AdminStaff() {
  const [addStaffModal, setAddStaffModal] = useState(false);
  const [deleteStaffModal, setDeleteStaffModal] = useState(false);
  const [editStaffModal, setEditStaffModal] = useState(false);
  const [firstName, setFirstName] = useState("All");
  const [staff, setStaff] = useState();

  const dispatch = useDispatch();

  const staffList = useSelector((state) => state.staffLists);
  const { loading, error, staffs } = staffList;

  const staffCreate = useSelector((state) => state.staffCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    successCreateMessage,
  } = staffCreate;

  const staffDelete = useSelector((state) => state.staffDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
    successDeleteMessage,
  } = staffDelete;

  const staffUpdate = useSelector((state) => state.staffUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
    successUpdateMessage,
  } = staffUpdate;

  const notifyError = (message) => toast.error(message);
  const notifySuccessDelete = (message) => toast.success(message);
  const notifySuccessUpdate = (message) => toast.success(message);
  const notifySuccessCreate = (message) => toast.success(message);

  useEffect(() => {
    dispatch(listStaff({ firstName: firstName !== "All" ? firstName : "" }));
    if (error || errorCreate || errorDelete || errorUpdate) {
      notifyError(error || errorCreate || errorDelete || errorUpdate);
    }
    if (successCreate) {
      setAddStaffModal(false);
      notifySuccessCreate(successCreateMessage);
      dispatch({ type: STAFF_CREATE_RESET });
    }
    if (successDelete) {
      setDeleteStaffModal(false);
      notifySuccessDelete(successDeleteMessage);
      dispatch({ type: STAFF_DELETE_RESET });
    }
    if (successUpdate) {
      setEditStaffModal(false);
      notifySuccessUpdate(successUpdateMessage);
      dispatch({ type: STAFF_UPDATE_RESET });
    }
  }, [
    error,
    errorCreate,
    errorDelete,
    errorUpdate,
    successCreate,
    successDelete,
    successUpdate,
    dispatch,
    firstName,
    successCreateMessage,
    successDeleteMessage,
    successUpdateMessage,
  ]);

  const staffDeleteHandler = (staff) => {
    dispatch(deleteStaff(staff._id));
  };

  return (
    <div className="adminStaff">
      {loadingCreate && <AdminLoader text="Creating new staff..." />}
      {loadingDelete && <AdminLoader text="Deleting staff details..." />}
      {loadingUpdate && <AdminLoader text="Updating staff details..." />}
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

      {addStaffModal ? (
        <AddNewStaff closeModal={() => setAddStaffModal(false)} />
      ) : (
        ""
      )}
      {deleteStaffModal ? (
        <Delete
          heading="Delete Staff Details"
          body="Are you sure to delete staff?"
          closeModal={() => setDeleteStaffModal(false)}
          deleteHandler={() => staffDeleteHandler(staff)}
        />
      ) : (
        ""
      )}
      {editStaffModal ? (
        <EditStaff closeModal={() => setEditStaffModal(false)} staff={staff} />
      ) : (
        ""
      )}

      <div className="adminStaff__container">
        <div className="adminStaff__title">
          <span>
            All Staff | <i class="fas fa-home "></i>
          </span>{" "}
          / Home / Staff
        </div>
        <div className="adminStaff__tableContainer">
          <div className="adminStaff__tableFilter">
            <span>
              <b>Staff Information</b>
            </span>
            <form action="">
              <input
                type="text"
                placeholder="Search by name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </form>
            <button onClick={() => setAddStaffModal(true)}>
              Add new staff
            </button>
          </div>
          <table className="adminStaff__table">
            <tr className="adminStaff__tableHead">
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th>Status</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
            {loading ? (
              <AdminLoader text="Fetching staff details..." />
            ) : error ? (
              error
            ) : (
              staffs.map((staff) => {
                return (
                  <tr className="adminStaff__tableData">
                    <td>#{staff._id.slice(0, 4)}</td>
                    <td>
                      <img
                        src="https://cdn.hswstatic.com/gif/play/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
                        alt=""
                      />
                    </td>
                    <td>
                      {staff.firstName} {staff.lastName}
                    </td>
                    <td>{staff.designation}</td>
                    <td>{staff.phone}</td>
                    <td>{staff.email}</td>
                    <td>{staff.joiningDate}</td>
                    <td>
                      {staff.isAdmin === true ? "Admin" : ""}{" "}
                      {staff.isStaff === true ? "Staff" : ""}
                    </td>
                    <td>{staff.address}</td>
                    <td>
                      <i
                        class="far fa-edit icon"
                        onClick={() => {
                          setStaff(staff);
                          setEditStaffModal(true);
                        }}
                      ></i>
                      <i
                        class="fas fa-trash-alt icon"
                        onClick={() => {
                          setStaff(staff);
                          setDeleteStaffModal(true);
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
