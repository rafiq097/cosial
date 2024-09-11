import express from "express";
import {
    followUnFollowUser,
    getUserProfile,
    loginUser,
    logoutUser,
    signupUser,
    updateUser,
} from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", auth, followUnFollowUser);
router.post("/update/:id", auth, updateUser);

export default router;