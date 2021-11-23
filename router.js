const express = require("express");
const accounts = require("./database");
const route = express.Router();

route.get("/accounts", (req, res) => {
  res.json({ userData: accounts });
});

module.exports = route;
