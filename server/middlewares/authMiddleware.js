const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - user not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

const adminCheck = async(req, res, next) => {
  try {
    if(req.user.role === "admin"){
      next();
    } else {
      return res.status(401).json({message: "Unauthorized not admin"})
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {protect, adminCheck};
