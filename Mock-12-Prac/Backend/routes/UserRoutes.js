const { Router } = require("express");
const { UserModel } = require("../models/user");
const bcrypt = require("bcrypt");
const UserRouter = Router();
const jwt = require("jsonwebtoken");
UserRouter.get("/", async (req, res) => {
  try {
    const AllUserData = await UserModel.find();
    res.send(AllUserData);
  } catch (error) {
    res.send({ error: error });
  }
});

UserRouter.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await UserModel.find({ email: email });
    if (existUser.length > 0) {
      res.send({ "User already Exist with name": existUser });
    } else {
      bcrypt.hash(password, 3, async (error, hash) => {
        if (error) {
          res.send({ error: error });
        } else {
          const UserRegister = new UserModel({ name, email, password: hash });
          await UserRegister.save();
          res.send("User Registered!");
        }
      });
    }
  } catch (error) {
    res.send({ error: error });
  }
});

UserRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userNotExist = await UserModel.findOne({ email: email });
    if (!userNotExist) {
      res.send("User Not Found!");
    } else {
      bcrypt.compare(password, userNotExist.password, (err, result) => {
        if (!result) {
          res.send({ err: "Wrong Cred" });
        } else {
          const token = jwt.sign({ UserId: userNotExist._id }, "test");
          res.send({ "Login Successfull": token });
        }
      });
    }
  } catch (error) {
    res.send({ error: error });
  }
});

module.exports = { UserRouter };
