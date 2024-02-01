const React = require("react");

function Items({ articles = [] }) {
  return (
    <div className="items">
      {articles.map((article) => {
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
                />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

module.exports = Items;
