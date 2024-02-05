const React = require("react");
module.exports = function Nav({ categories, auth }) {
  return (
    <div className="header_main">
      <nav className="navbar">
        {categories.map((category) => {
          return (
            <li key={category.id}>
              <a href={`/categories/${category.id}`}>{category.title}</a>
            </li>
          );
        })}
      </nav>
      <div className="auth">
        {auth ? (
          <>
            <li>{auth}</li>
            <li>
              <a href="api/auth/logout">Выйти</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/auth/login">Войти</a>
            </li>
            <li>
              <a href="/auth/regis">Регистрация</a>
            </li>
          </>
        )}
      </div>
    </div>
  );
};
