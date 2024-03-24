const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: [],
  created_at: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
},
  // {
  //   collection: "Questions",
  // }
);

module.exports = mongoose.model("Questions", questionSchema);
// mongoose.model("Questions", questionSchema);