const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
mongoose
  .connect("mongodb://localhost:27017/pawanDynamic")
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch(() => {
    console.log("data base is not connected");
  });
