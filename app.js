require("@babel/register");

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const serverConfig = require("./config/serverConfig");

const indexRouter = require("./routes/views/index.routes");
// const categoriesRouter = require('./routes/categories.routes');
// const categoriesRouter = require("./routes/views/category.routes");
const itemsRouter = require("./routes/views/items.routes");
const selectRouter = require("./routes/views/selectItems.routes");
const itemOneRouter = require("./routes/views/item.routes");

const app = express();
const PORT = 3000;
serverConfig(app);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// app.use("/categories", categoriesRouter);
app.use("/categories", itemsRouter);
app.use("/categories", selectRouter);
app.use("/categories/item", itemOneRouter);

app.listen(PORT, () => {
  console.log(`Server started port: ${PORT}`);
});
