const React = require("react");
const ReactDOMServer = require("react-dom/server");

function renderComponent(component, props, option = { doctype: true }) {
  const element = React.createElement(component, {
    ...props,
    ...this.locals,
    ...this.app.locals,
  });
  const html = ReactDOMServer.renderToStaticMarkup(element);
  return option.doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr(req, res, next) {
  res.renderComponent = renderComponent;
  next();
}

module.exports = ssr;
