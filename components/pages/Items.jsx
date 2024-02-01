const React = require("react");
const Layout = require("../Layout");
const Item = require("../ItemsComponent");

function Items({ title, articles = [] }) {
  return (
    <Layout title={title}>
      <div className="items">
        <Item articles={articles} />
        {/* {articles.map((article) => {
          return (
            <div key={article.id}>
              
              <div className="item_title">Название: {article.title}</div>
              <div className="item_price">Цена: {article.price}</div>
              <div>
                <a href={`categories/item/${article.id}`}>
                  <img
                    className="item_img"
                    src={article.image}
                    alt={article.title}
                  />{" "}
                </a>
              </div>
            </div>
          );
        })}  */}
      </div>
    </Layout>
  );
}

module.exports = Items;
