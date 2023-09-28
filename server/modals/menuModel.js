import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    name: { type: String, requeired: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
