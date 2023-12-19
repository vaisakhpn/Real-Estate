import express from "express";
import {
  test,
  updateUser,
  deleteUser,
  getUserListing,
  getUser,
} from "../controllers/user.controller.js";
import { signOut } from "../controllers/auth.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/signout", signOut);
router.get("/listing/:id", verifyToken, getUserListing);
router.get("/:id", verifyToken, getUser);


export default router;
