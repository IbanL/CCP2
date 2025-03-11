const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

app.use(helmet());


const usersRoutes = require("./routes/usersRoutes");
const skillsRoutes = require("./routes/skillsRoutes")

const connectDb = require("./config/db");
const connectCloudinary = require("./config/Cloudinary");
const errorHandler = require("./middlewares/errorHandler");
const { authenticateImplicitWithAdc } = require("./config/gcloud");

connectDb();
connectCloudinary();
authenticateImplicitWithAdc();

app.use("/api/users", usersRoutes)

app.use("/api/skills", skillsRoutes)

const PORT = process.env.PORT || 3000;

app.get("/", (req,res) => {
    res.send("hello world")
})

app.use(errorHandler)

app.listen(PORT, () => {
    console.log("server opérationnel sur http://localhost:"+PORT);
    
})
