const router = require("express").Router();

const Auth = require("../../components/pages/Auth");
const Login = require("../../components/pages/Login");

router.route("/regis").get((req, res) => {
  res.send(res.renderComponent(Auth));
});

router.route("/login").get((req, res) => {
  res.send(res.renderComponent(Login));
});

module.exports = router;
