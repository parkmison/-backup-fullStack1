const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://parkmiso:qkralth12@parkmiso.ydkdt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log("몽고db connected"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => res.send("ㅋㅋ"));

app.listen(port, () => console.log(`포트${port}`));
