"use strict";

const express = require("express");
const config = require("./config");

// Constants
const PORT = 3000;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("v3-b1");
});

app.listen(PORT, HOST, () => {
  console.log(`env >> ${config.DB_URI}`);
  console.log("checking");
  console.log(`Running on http://${HOST}:${PORT}`);
});
