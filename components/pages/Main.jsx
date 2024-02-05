const React = require("react");
const Layout = require("../Layout");
const Nav = require("../Nav");
const Items = require("../ItemsComponent");

module.exports = function Main({ title, categories, articles, auth }) {
  return (
    <Layout title={title}>
      <Nav categories={categories} auth={auth} />
      <h1>Добро пожаловать, гость!</h1>
      <Items articles={articles.sort(() => Math.random() - 0.5)} />
    </Layout>
  );
};
