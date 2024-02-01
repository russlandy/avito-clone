const express = require("express");
const morgan = require("morgan");
const ssr = require("../middleware/ssr");

const serverConfig = (app) => {
  // app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(ssr);
};

module.exports = serverConfig;
