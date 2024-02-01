const router = require("express").Router();
const { Article, Category } = require("../../db/models");

const Items = require("../../components/pages/Items");

router.get("/", async (req, res) => {
  const id = req.query.category;
  // console.log("id+++++", id);
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
  // console.log(articles.categoryID);
  // const { title } = titleRaw;
  console.log("titleRAW ======>", titleRaw);
  res.send(res.renderComponent(Items, { title: titleRaw.title, articles }));
});

module.exports = router;
