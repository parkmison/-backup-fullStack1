const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

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

app.get("/", (req, res) => res.send("ㅋㅋ안뇽"));

app.post("/register", (req, res) => {
  //client에서 회원가입 정보 받아서 데이터베이스에 저장

  const user = new User(req.body);
  user.save((error, userInfo) => {
    if (error) return res.json({ success: false, error });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`포트${port}`));
