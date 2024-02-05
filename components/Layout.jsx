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
        <div className="wrapper">
          <header>
            <div className="logo">
              <a href="/">Avito</a>
            </div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
};
