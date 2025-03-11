const express = require("express");
const multer = require('multer');

const router = express.Router();



const upload = multer({ dest: 'uploads/' })

const {validateRequest} = require("../middlewares/validateRequest");
const { validateSkillId } = require("../validations/skillValidation");
const {protect, adminCheck} = require("../middlewares/authMiddleware");



const {addNewSkill, getAllSkills, deleteSkill, updateSkill} = require("../controllers/skillsController");

router.post("/add", protect, upload.single('imageFile'), addNewSkill);

router.get("/", getAllSkills);

router.delete("/delete/:id", validateSkillId, validateRequest, deleteSkill);

router.put("/update/:id", validateSkillId, validateRequest, upload.single('imageFile'), updateSkill);


module.exports = router

