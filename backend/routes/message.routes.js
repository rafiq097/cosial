import express from "express";
import auth from "../middlewares/auth.js";
import { getMessages, sendMessage, getConversations } from "../controllers/messageController.js";

const router = express.Router();

router.get("/conversations", auth, getConversations);
router.get("/:otherUserId", auth, getMessages);
router.post("/", auth, sendMessage);

export default router;