import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMenu } from "../../actions/menuActions";

export default function AddMenu({ closeModal }) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDiscription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [price, setPrice] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const dispatch = useDispatch();

  const staffSignIn = useSelector((state) => state.staffSignIn);
  const { staffInfo } = staffSignIn;

  const uploadImageHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${staffInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createMenu(image, name, category, description, ingredients, price)
    );
  };

  return (
    <div className="addMenuAdd">
      <div className="addMenuAdd__box">
        <div className="addMenuAdd__box-title">
          {" "}
          <h2>Add New Menu</h2>
          <i onClick={closeModal} class="fas fa-times icon"></i>
        </div>
        <form onSubmit={submitHandler}>
          <div className="addMenuAdd__image">
            {image ? (
              <img src={image} alt="" />
            ) : loadingUpload ? (
              "Loading"
            ) : (
              <i class="far fa-images addMenuAdd__image-icon"></i>
            )}
          </div>
          <div className="addMenuAdd__inputBox">
            <label htmlFor="">Image</label>
            <input
              type="file"
              placeholder="Food Name"
              onChange={uploadImageHandler}
            />
            <div>{errorUpload && errorUpload}</div>
          </div>
          <div className="addMenuAdd__inputBox">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Food Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="addMenuAdd__inputBox">
            <label htmlFor="">Category</label>
            <select
              name=""
              id=""
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="" selected hidden disabled>
                Choose Category
              </option>
              <option value="Burgers">Burgers</option>
              <option value="Chips">Chips</option>
              <option value="Kebabs">Kebabs</option>
            </select>
          </div>
          <div className="addMenuAdd__inputBox">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={description}
              onChange={(e) => setDiscription(e.target.value)}
            />
          </div>
          <div className="addMenuAdd__inputBox">
            <label htmlFor="">Ingredients</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className="addMenuAdd__inputBox">
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit">Add New Menu</button>
        </form>
      </div>
    </div>
  );
}
