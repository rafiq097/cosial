import express from "express";
import {
	createPost,
	deletePost,
	getPost,
	likeUnlikePost,
	replyToPost,
	getFeedPosts,
} from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/feed", auth, getFeedPosts);
router.get("/:id", getPost);

router.post("/create", auth, createPost);
router.delete("/:id", auth, deletePost);

router.post("/like/:id", auth, likeUnlikePost);
router.post("/reply/:id", auth, replyToPost);

export default router;