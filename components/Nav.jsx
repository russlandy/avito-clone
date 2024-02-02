const React = require("react");
module.exports = function Nav({ categories }) {
  return (
    <nav>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <a href={`/categories/${category.id}`}>{category.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
