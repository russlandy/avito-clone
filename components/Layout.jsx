const React = require("react");

module.exports = function Layout({ children, title, auth }) {
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
                <a href="/auth">Войти</a>
              </li>
              <li>
                <a href="/register">Регистрация</a>
              </li>
            </>
          )}
        </header>
        {children}
      </body>
    </html>
  );
};
