import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import { generateToken, isAdmin, isAuth } from "../utils.js";
import Staff from "../modals/staffModel.js";

const staffRouter = express.Router();

staffRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Staff.deleteMany({});
    const createdStaff = await Staff.insertMany(data.staff);
    res.send(createdStaff);
  })
);

staffRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const staff = await Staff.findOne({ email: req.body.email });
    if (staff) {
      if (bcrypt.compareSync(req.body.password, staff.password)) {
        res.send({
          _id: staff._id,
          firstName: staff.firstName,
          lastName: staff.lastName,
          email: staff.email,
          phone: staff.phone,
          gender: staff.gender,
          address: staff.address,
          isAdmin: staff.isAdmin,
          isStaff: staff.isStaff,
          token: generateToken(staff),
        });
        return;
      }
    }
    res.status(401).send({
      message: "Email or Password is not correct, Please check and try again",
    });
  })
);

staffRouter.get(
  "/",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const firstName = req.query.firstName || "";
    const nameFilter = firstName
      ? { firstName: { $regex: firstName, $options: "i" } }
      : {};
    const staff = await Staff.find({ ...nameFilter });
    res.send(staff);
  })
);

staffRouter.post(
  "/createStaff",
  expressAsyncHandler(async (req, res) => {
    const staff = new Staff({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      designation: req.body.designation,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      gender: req.body.gender,
      joiningDate: req.body.joiningDate,
      isAdmin: req.body.isAdmin,
      isStaff: req.body.isStaff,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdStaff = await staff.save();

    res.status(200).json({
      message: "New Staff Details Created Successfully",
      staff: createdStaff,
    });
  })
);

staffRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id);
      if (staff) {
        const deleteStaff = await staff.deleteOne();

        res
          .status(200)
          .json({ message: "Staff Deleted Successfully", staff: deleteStaff });
      } else {
        res.status(404).json({ message: "Staff Not Found" });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
);

staffRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const staff = await Staff.findById(req.params.id);
      if (staff) {
        staff.firstName = req.body.firstName || staff.firstName;
        staff.lastName = req.body.lastName || staff.lastName;
        staff.designation = req.body.designation || staff.designation;
        staff.email = req.body.email || staff.email;
        staff.phone = req.body.phone || staff.phone;
        staff.address = req.body.address || staff.address;
        staff.joiningDate = req.body.joiningDate || staff.joiningDate;
        staff.gender = req.body.gendeer || staff.gender;
        staff.password = req.body.password || staff.password;
        staff.isAdmin = req.body.isAdmin || staff.isAdmin;
        staff.isStaff = req.body.isStaff || staff.isStaff;
        const updatedStaff = await staff.save();
        res.status(200).json({
          message: "Staff Details Updated Successfully",
          staff: updatedStaff,
        });
      }
    } catch (error) {
      res.status(500).json({ message: error });
    }
  })
);

staffRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const staff = await Staff.findById(req.params.id);

    if (staff) {
      res.send(staff);
    } else {
      res.status(404).send({ message: "Staff not found" });
    }
  })
);

export default staffRouter;
