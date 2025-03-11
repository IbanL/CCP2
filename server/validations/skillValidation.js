const {body, param} = require("express-validator");

exports.validateSkillId = [
    param("id")
    .isMongoId()
    .withMessage("id utilisateur manquant / invalide")
];