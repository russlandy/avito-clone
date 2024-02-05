const React = require("react");
const Layout = require("../Layout");

module.exports = function Auth() {
  return (
    <Layout>
      <div className="form_wrapper">
        <h2>Войти в свою учетную запись</h2>
        <form className="form-auth" name="auth-form">
          <input name="email" placeholder="email" />
          <input name="login" placeholder="username" />
          <input name="password" placeholder="password" />
          <button type="submit">Register</button>
          <script defer src="/js/authForm.js" />
        </form>
      </div>
    </Layout>
  );
};
