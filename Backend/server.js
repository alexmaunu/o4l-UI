const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

 // Routes
app.use("/api/chatgpt",  require("./routes/chatGptRoute"));

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
});