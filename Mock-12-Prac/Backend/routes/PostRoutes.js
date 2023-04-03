const { Router } = require("express");
const { PostModel } = require("../models/Post");
const { AuthMiddleWare } = require("../middleware/AuthMiddleware");
const PostRouter = Router();

PostRouter.get("/", async (req, res) => {
  const data = await PostModel.find();
  res.send(data);
});

PostRouter.post("/addPost", AuthMiddleWare, async (req, res) => {
  try {
    const addPost = new PostModel(req.body);
    await addPost.save();
    res.send("Post Added");
  } catch (error) {
    res.send({ error: error });
  }
});

PostRouter.delete("/delete/:id", AuthMiddleWare, async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    await PostModel.findByIdAndDelete({ _id: id });
    res.send("Post Deleted!");
  } catch (error) {
    res.send({ error: error });
  }
});

PostRouter.patch("/patch/:id", AuthMiddleWare, async (req, res) => {
  try {
    const { id } = req.params;
    await PostModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send("Post Updated!");
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = { PostRouter };
