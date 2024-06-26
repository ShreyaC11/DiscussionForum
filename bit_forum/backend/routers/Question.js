const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const QuestionDB = require("../models/Question");

router.post("/", async (req, res) => {
    const questionData = new QuestionDB({
        title: req.body.title,
        body: req.body.body,
        tags: req.body.tag,
        user: req.body.user,
    });

    await questionData
        .save()
        .then((doc) => {
            res.status(201).send({
                status: true,
                data: doc,
            });
        })
        .catch((err) => {
            res.status(400).send({
                // status: false.valueOf,
                status: false,
                message: "Question not added successfully",
            });
        });
});

router.get("/", async (req, res) => {
    QuestionDB.aggregate([
        {
            $lookup: {
                from: "comments",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$question_id", "$$question_id"],
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 1,
                            //                 user_id: 1,
                            comment: 1,
                            created_at: 1,
                            //                 question_id: 1,

                        },
                    },
                ],
                as: "comments",
            },
        },
        {
            $lookup: {
                from: "answers",
                let: { question_id: "$_id" },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $eq: ["$question_id", "$$question_id"],
                            },
                        },
                    },
                    {
                        $project: {
                            _id: 1,
                            //                 question_id: 1,
                            //                 user: 1,
                            //                 comment: 1,
                            //                 // created_at: 1,
                            //                 // question_id: 1,
                            //                 created_at: 1,
                        },
                    },
                ],
                as: "answerDetails",
            },
        },
        //       // {
        //       //   $unwind: {
        //       //     path: "$answerDetails",
        //       //     preserveNullAndEmptyArrays: true,
        //       //   },
        //       // },
        {
            $project: {
                __v: 0,
                //           // _id: "$_id",
                //           // answerDetails: { $first: "$answerDetails" },
            },
        },
    ])
        .exec()
        .then((questionDetails) => {
            res.status(200).send(questionDetails);
        })
        .catch((e) => {
            console.log("Error: ", e);
            res.status(400).send(e);
        });
});

router.get("/:id", async (req, res) => {
    try {
        QuestionDB.aggregate([
            {
                $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
            },
            {
                $lookup: {
                    from: "answers",
                    let: { question_id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$question_id", "$$question_id"],
                                },
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                user: 1,
                                answer: 1,
                                question_id: 1,
                                created_at: 1,
                            },
                        },
                    ],
                    as: "answerDetails",
                },
            },
            {
                $lookup: {
                    from: "comments",
                    let: { question_id: "$_id" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$question_id", "$$question_id"],
                                },
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                question_id: 1,
                                user: 1,
                                comment: 1,
                                // created_at: 1,
                                // question_id: 1,
                                created_at: 1,
                            },
                        },
                    ],
                    as: "comments",
                },
            },

            {
                $project: {
                    __v: 0,

                },
            },
        ])
            .exec()
            .then((questionDetails) => {
                res.status(200).send(questionDetails);
            })
            .catch((e) => {
                console.log("Error: ", e);
                res.status(400).send(e);
            });
    } catch (err) {
        console.log(err);
        res.status(400).send({
            message: "Question not found",
        });
    }
});

module.exports = router;