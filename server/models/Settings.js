const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema({
userId : {
    type : ObjectId,
    required: true,
},
cookie : {
    type : String,
    required: true,
}
})


module.exports = mongoose.model("Settings", settingsSchema)