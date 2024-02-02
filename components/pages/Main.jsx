const React = require("react");
const Layout = require("../Layout");
const Nav = require("../Nav");
const Items = require("../ItemsComponent");

module.exports = function Main({ title, categories, articles }) {
  return (
    <Layout title={title}>
      <h1>Добро пожаловать, гость!</h1>
      <Nav categories={categories} />
      <p>Welcome to {title}</p>
      <Items articles={articles.sort(() => Math.random() - 0.5)} />
    </Layout>
  );
};
