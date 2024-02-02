const React = require("react");
const Layout = require("../Layout");
const Item = require("../ItemsComponent");

function Items({ title, articles = [] }) {
  return (
    <Layout title={title}>
      <div className="items">
        <Item articles={articles} />
      </div>
    </Layout>
  );
}

module.exports = Items;
