const React = require("react");
const Layout = require("../Layout");
const Categories = require("../Categories");
const Items = require("../ItemsComponent");

module.exports = function Main({ title, categories, articles }) {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <Categories categories={categories} />
      <p>Welcome to {title}</p>
      <Items articles={articles} />
    </Layout>
  );
};
