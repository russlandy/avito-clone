const React = require("react");

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <script defer src="/js/script.js"></script>
        <header>
          <div className="logo">
            <a href="/">Avito</a>
          </div>
          <nav className="nav">
            <ul className="nav_items">
              <li>
                <a href="/categories/1">Квартиры</a>
              </li>
              <li>
                <a href="/categories/2">Авто</a>
              </li>
              <li>
                <a href="/categories/3">Книги</a>
              </li>
              <li>
                <a href="/categories/4">Техника</a>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
};
