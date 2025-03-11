const {body, param} = require("express-validator");

exports.validateRegisterUser = [
    body("name")
    .trim()
    .notEmpty()
    .withMessage("le nom est obligatoire")
    .isLength({min: 3})
    .withMessage("le nom doit faire au moins 3 characteres")
    .isLength({max: 50})
    .withMessage("le nom doit faire moins de 7 char"),

    body("email")
    .trim()
    .notEmpty()
    .withMessage("l'email est obligatoire")
    .isEmail()
    .withMessage("Veuillez entrez une adresse email valide"),

    body("password")
    .trim()
    .notEmpty()
    .withMessage("mot de passe manquant")
    .isLength({min: 2, max:200})
    .withMessage("le mort de pass doit contenire entre 2 et 200 char"),
];


exports.validateUserId = [
    param("id")
    .isMongoId()
    .withMessage("id utilisateur manquant / invalide")
];

exports.validateLoginUser = [
    body("email")
    .trim()
    .notEmpty()
    .withMessage("l'email est obligatoire")
    .isEmail()
    .withMessage("Veuillez entrez une adresse email valide"),

    body("password")
    .trim()
    .notEmpty()
    .withMessage("mot de passe manquant")
    .isLength({min: 2, max:200})
    .withMessage("le mort de pass doit contenire entre 2 et 200 char"),
];