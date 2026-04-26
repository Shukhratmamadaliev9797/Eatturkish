import multer from "multer";
import express from "express";
import { isAuth } from "../utils.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

const uploadRouter = express.Router();
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
});

const sanitizeFolderPart = (value = "") =>
  value
    .toString()
    .trim()
    .replace(/[^a-zA-Z0-9/_-]/g, "")
    .replace(/\/{2,}/g, "/")
    .replace(/^\/|\/$/g, "");

const buildFolderPath = (customFolder = "") => {
  const now = new Date();
  const year = String(now.getUTCFullYear());
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const baseFolder = sanitizeFolderPart(process.env.CLOUDINARY_FOLDER || "eatturkish");
  const scopedFolder = sanitizeFolderPart(customFolder || "general");
  return `${baseFolder}/${scopedFolder}/${year}/${month}`;
};

const uploadToCloudinary = (fileBuffer, folder) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.v2.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) return reject(error);
        return resolve(result);
      }
    );
    stream.end(fileBuffer);
  });

uploadRouter.post("/", isAuth, upload.single("image"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No image file uploaded." });
    }

    const folder = buildFolderPath(req.body?.folder);
    const result = await uploadToCloudinary(req.file.buffer, folder);
    return res.send(result.secure_url);
  } catch (error) {
    return next(error);
  }
});

// Backward compatibility for old frontend path.
uploadRouter.post("/s3", isAuth, upload.single("image"), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).send({ message: "No image file uploaded." });
    }

    const folder = buildFolderPath(req.body?.folder);
    const result = await uploadToCloudinary(req.file.buffer, folder);
    return res.send(result.secure_url);
  } catch (error) {
    return next(error);
  }
});

export default uploadRouter;
