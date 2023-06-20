const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const Main = require('../components/Main');

const router = express.Router();

router.get('/', (req, res) => {
  const main = React.createElement(Main, { title: 'Express' });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
