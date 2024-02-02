const express = require("express");
const { Category, Article } = require("../../db/models");
const Main = require("../../components/pages/Main");

const router = express.Router();

router.get("/", async (req, res) => {
  const articles = await Article.findAll({
    raw: true,
  });
  const categories = await Category.findAll({ raw: true });
  res.send(res.renderComponent(Main, { title: "Avito", categories, articles }));
});

module.exports = router;
