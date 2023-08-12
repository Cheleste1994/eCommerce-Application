import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { handleEmailChange, handleSubmit } from '../../../common/validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [customValidationMessage, setCustomValidationMessage] = useState('');
  return (
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
        <form className="dropdown-menu p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="formEmail" className="form-label">
              Email address
              <input
                type="email"
                name="email"
                className={`form-control ${emailValid ? '' : 'is-invalid'}`}
                id="formEmail"
                placeholder="email@example.com"
                value={email}
                onChange={(e) =>
                  handleEmailChange(
                    e.target.value,
                    setEmail,
                    setEmailValid,
                    setCustomValidationMessage,
                  )
                }
                title={customValidationMessage}
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="formPassword" className="form-label">
              Password
              <input
                name="password"
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
          <Link to="/registration" className="dropdown-item">
            New around here? Sign up
          </Link>
          <Link to="/reset" className="dropdown-item">
            Forgot password?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
