import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token)
            return res.status(401).json({ message: "Unauthorized" });

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		const user = await User.findById(decoded.userId).select("-password");

		req.user = user;

		next();
	}
    catch (err) {
		res.status(500).json({ message: err.message });
		console.log("Error: ", err.message);
	}
};

export default auth;