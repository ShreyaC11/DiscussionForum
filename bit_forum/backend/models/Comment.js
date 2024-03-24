const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
  {
    question_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
    comment: String,
    created_at: {
      type: Date,
      default: Date.now(),
    },
    user: Object,
  },
  // {
  //   collection: "Comments",
  // }
  );

module.exports = mongoose.model("Comments", CommentSchema);
//  mongoose.model("Comments", CommentSchema);