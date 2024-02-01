const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const middleware = [
  morgan("dev"),
  cors(),
  express.json(),
  bodyParser.urlencoded({ extended: true }),
];
module.exports = middleware;
