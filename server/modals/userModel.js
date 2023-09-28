import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, requeired: true },
    lastName: { type: String, requeired: true },
    email: { type: String, requeired: true },
    phone: { type: String, requeired: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
