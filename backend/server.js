const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const imageRouter = require("./route");
const cloudinary = require('cloudinary').v2;
require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URL,)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

app.use("/api/image", imageRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
