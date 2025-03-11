const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
title : {
    type : String,
    required: true,
    unique: true,
},
categorie : {
    type : String,
    enum : ["front", "back"],
    required: true,
},
niveau : {
    type : String,
    enum : ["débutant", "intermédiaire", "expert"],
    required: true,
},
img_public_id : {
    type : String,
    required: true,
},
img : {
    type : String,
    required: true,
}
})


module.exports = mongoose.model("Skill", skillSchema)