const { v2: cloudinary } = require('cloudinary');

const connectCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET
        });
        console.log("cloudinary connectée");
        } catch (error) {
            console.error("erreur de connection a cloudinary", error);
        }
}



module.exports = connectCloudinary;