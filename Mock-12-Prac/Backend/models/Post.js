const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  author: { type: String },
  task: { type: String, required: true },
  status: { type: Boolean, required: true },
});
const PostModel = mongoose.model("Post", PostSchema);
module.exports = { PostModel };
