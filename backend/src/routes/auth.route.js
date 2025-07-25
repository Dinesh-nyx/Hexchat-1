import express from "express";
import { checkAuth, login, logout, signup, updateProfile, updateProfilePicture, searchUserByTag } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);
router.put("/update-profile-picture", protectRoute, updateProfilePicture);

router.get("/check", protectRoute, checkAuth);
router.get("/search", searchUserByTag);

export default router;
