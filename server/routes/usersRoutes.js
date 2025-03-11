const express = require("express");
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  updateUser,
  deleteUser,
  loginUser,
  logoutUser,
} = require("../controllers/userController");


const {validateRequest} = require("../middlewares/validateRequest");
const {validateUserId, validateRegisterUser, validateLoginUser } = require("../validations/authValidation");

const {createAssessment} = require("../middlewares/reCAPTCHA");
const {protect, adminCheck} = require("../middlewares/authMiddleware");



router.get("/", protect, adminCheck,  getAllUsers);

router.post("/register", validateRegisterUser, validateRequest, createAssessment,  registerUser);

router.put("/:id", protect, validateUserId, validateRegisterUser, updateUser);

router.delete("/:id", protect, adminCheck, validateUserId, validateRequest, deleteUser);

router.post("/login", validateLoginUser, validateRequest, loginUser);

router.get("/logout", protect, logoutUser)

module.exports = router;