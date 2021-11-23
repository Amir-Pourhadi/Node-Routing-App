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

/**
 * @route POST /api/accounts
 * @desc Create a new account
 * @access Public
 * @returns {object} 201 - All accounts
 * @returns {Error}  500 - Unexpected error
 */
route.post("/accounts", (req, res) => {
  try {
    const newAccount = req.body;
    accounts.push(newAccount);
    res.json({ userData: accounts });
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @route Get /api/accounts/:id
 * @desc Get a single account
 * @access Public
 * @returns {object} 200 - An account
 * @returns {Error}  500 - Unexpected error
 * @returns {Error}  404 - Account not found
 */
route.get("/accounts/:id", (req, res) => {
  try {
    const accountId = +req.params.id;
    const getAccount = accounts.find((account) => account.id === accountId);
    if (getAccount) {
      res.json({ userData: getAccount });
    } else {
      res.status(404).send("Account not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @route PUT /api/accounts/:id
 * @desc Update an account
 * @access Public
 * @returns {object} 200 - An account
 * @returns {Error}  500 - Unexpected error
 * @returns {Error}  404 - Account not found
 */
route.put("/accounts/:id", (req, res) => {
  try {
    const accountId = +req.params.id;
    const getAccount = accounts.find((account) => account.id === accountId);
    if (getAccount) {
      const { username, email, gender, status } = req.body;

      if (username) getAccount.username = username;
      if (email) getAccount.email = email;
      if (gender) getAccount.gender = gender;
      if (status) getAccount.status = status;

      res.json({ userData: getAccount });
    } else {
      res.status(404).send("Account not found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = route;
