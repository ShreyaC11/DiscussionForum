// if (process.env.NODE_ENV !== "production") {
//     require("dotenv").config();
//   }

const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const db = require("./db");
const PORT = process.env.PORT || 80;
const router = require("./routers");
const { default: mongoose } = require("mongoose");

// require("./Questions");
// require("./Answers");
// require("./Comments");



//db-connection
// const db = require("./db");
db.connect();

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());

//header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//api
app.use("/api", router)

//static resources
app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));


// app.get("*", (req, res) => {
//   try {
//     res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
//   } catch (e) {
//     res.send("OOPS! An error occured");
//   }
// });
app.get("/getdetails", async (req, res) => {
  try {
    const details = await QuestionDB.find({});
    res.send({ status: "ok", data: details });
  }
  catch (error) {
    console.log(error);
  }
});

//cors
app.use(cors());

//server listen
app.listen(PORT, () => {
  console.log(`Discussion forum API is running on PORT No- ${PORT}`);
}
);

