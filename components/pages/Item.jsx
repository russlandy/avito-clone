const React = require("react");
const Layout = require("../Layout");

function Items({ title, article = {} }) {
  return (
    <Layout title={title}>
      <div className="items">
        <div key={article.id}>
          <div className="item_title">Название: {article.title}</div>
          <div className="item_price">Цена: {article.price}</div>
          <div>
            <img className="item_img" src={article.image} alt={article.title} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Items;
