// const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Answers");
const commentRouter = require('./Comment')

router.get("/", (req, res) => {
  res.send("Welcome to Discussison forum api");
});

router.use("/question", questionRouter);
 router.use("/answer", answerRouter);
router.use('/comment', commentRouter);

module.exports = router;