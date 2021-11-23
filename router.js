const express = require("express");
const accounts = require("./database");
const route = express.Router();

/**
 * @route GET /api/accounts
 * @desc Get all accounts
 * @access Public
 * @returns {object} 200 - An array of accounts
 * @returns {Error}  500 - Unexpected error
 */
route.get("/accounts", (req, res) => {
  try {
    res.json({ userData: accounts });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
