const React = require("react");
const Layout = require("../Layout");

module.exports = function Login() {
  return (
    <Layout>
      <div className="form_wrapper">
        <h2>Войти в свою учетную запись</h2>
        <form className="form-login" name="login-form">
          <input name="email" placeholder="email" />
          <input name="password" placeholder="password" />
          <button type="submit">Login</button>
          <script defer src="/js/loginForm.js" />
        </form>
      </div>
    </Layout>
  );
};
