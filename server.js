require("dotenv").config();

const express = require("express");
const routes = require("./routes/tea");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use("/", routes); //says to use the routes

const listener = app.listen(process.env.PORT || 3200, () => {
  console.log("App is listening on port " + listener.address().port);
});

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) return console.log("Error: ", err);
    console.log(
      "MongoDB Connection -- Ready state is:",
      mongoose.connection.readyState
    );
  }
);
