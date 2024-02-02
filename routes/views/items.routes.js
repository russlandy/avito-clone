const router = require("express").Router();
const { Article, Category } = require("../../db/models");

const Items = require("../../components/pages/Items");

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const articles = await Article.findAll({
    raw: true,
    where: {
      categoryID: id,
    },
    include: {
      model: Category,
    },
  });
  const titleRaw = await Category.findOne({ where: { id } });
  res.send(res.renderComponent(Items, { title: titleRaw.title, articles }));
});

module.exports = router;
