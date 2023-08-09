import React from 'react';
// eslint-disable-next-line import/extensions
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Login = () => (
  <div className="login">
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-auto-close="outside"
      >
        LogIn
      </button>
      <form className="dropdown-menu p-4">
        <div className="mb-3">
          <label htmlFor="formEmail" className="form-label">
            Email address
            <input
              type="email"
              className="form-control"
              id="formEmail"
              placeholder="email@example.com"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="formPassword" className="form-label">
            Password
            <input
              type="password"
              className="form-control"
              id="formPassword"
              placeholder="Password"
            />
          </label>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="checkLogin">
              Remember me
              <input type="checkbox" className="form-check-input" id="checkLogin" />
            </label>
          </div>
        </div>
        <button type="submit" className="btn">
          Sign in
        </button>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/">
          New around here? Sign up
        </a>
        <a className="dropdown-item" href="/">
          Forgot password?
        </a>
      </form>
    </div>
  </div>
);

export default Login;
