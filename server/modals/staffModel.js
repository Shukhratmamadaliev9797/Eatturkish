import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    image: { type: String, required: false },
    firstName: { type: String, requeired: true },
    lastName: { type: String, requeired: true },
    designation: { type: String, required: true },
    email: { type: String, requeired: true },
    phone: { type: String, requeired: true },
    gender: { type: String, requeired: true },
    joiningDate: { type: String, required: true },
    address: { type: String, requeired: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, requeired: true },
    isStaff: { type: Boolean, requeired: true },
  },
  {
    timestamps: true,
  }
);

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
