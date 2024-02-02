const router = require("express").Router();

const { Article } = require("../../db/models");
const Item = require("../../components/pages/Item");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const article = await Article.findOne({ where: { id: +id } });
  // console.log(article);
  res.send(res.renderComponent(Item, { title: article.title, article }));
});

module.exports = router;
