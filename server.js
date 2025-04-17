const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose')
const { contactRoute } = require("./routes/contactRoute");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", contactRoute);
const connectDB = () => {
  const MONGO_URI = process.env.MONGO_URI || "";
  if (MONGO_URI.length === 0) {
    throw new Error("MOngo uri not present ");
     process.exit(1);
  }
  return mongoose.connect(MONGO_URI)
};
const start = () => {
    connectDB().then(()=>{
        console.log("DB connect Success!!!")
        app.listen(3000, () => {
          console.log("Server Listning on :" + PORT);
        })

    })
};
start()
