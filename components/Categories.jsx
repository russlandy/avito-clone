const React = require("react");
const Layout = require("./Layout");

function Categories({ categories = [] }) {
  return (
    <div className="wrap">
      <form className="form">
        <label htmlFor="category-select">Ваша категория:</label>
        <select className="select" name="category" id="category-select">
          <option value={""}>Выберите категорию</option>
          {categories.map((category) => {
            return (
              <>
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              </>
            );
          })}
        </select>
        <button className="btn" type="submit">
          Подтвердить
        </button>
      </form>
    </div>
  );
}

module.exports = Categories;
