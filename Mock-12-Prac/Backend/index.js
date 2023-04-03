const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { UserRouter } = require("./routes/UserRoutes");
const { PostRouter } = require("./routes/PostRoutes");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);
app.use("/post", PostRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log({ error: error });
  }
  console.log("Server Running on 4500");
});
