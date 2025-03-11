const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;


  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ user });
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(418).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error("All fields are required");
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Invalid email or password");
    }

    const token = createToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({ user, token });
  } catch (error) {
    next(error);
  }
};


exports.logoutUser = (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({ message: "Deconnexion reussie" });
  } catch (error) {
    next(error)
  }
};


const verifyRecaptcha = async (recaptchaResponse) => {
  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: "6LdVY-kqAAAAABUqjWwqTfNz4QMVStr3HXu9Ykrq",
          response: recaptchaResponse,
        },
      }
    );
    return response.data.success;

  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    return false;
  }
}


