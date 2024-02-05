require("@babel/register");

const express = require("express");
const serverConfig = require("./config/serverConfig");

const indexRouter = require("./routes/views/index.routes");
// const categoriesRouter = require('./routes/categories.routes');
// const categoriesRouter = require("./routes/views/category.routes");
const itemsRouter = require("./routes/views/items.routes");
const itemOneRouter = require("./routes/views/item.routes");
const authViewRouter = require("./routes/views/auth.routes");

const app = express();
const PORT = 3000;
serverConfig(app);

app.use("/", indexRouter);
// app.use("/categories", categoriesRouter);
app.use("/categories", itemsRouter);
app.use("/categories/item", itemOneRouter);
app.use("/auth", authViewRouter);

//регистрацию доделать, базу с пользователями, добавить столбец в статьи кто добавил.

app.listen(PORT, () => {
  console.log(`Server started port: ${PORT}`);
});
