import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, useNavigate } from 'react-router-dom';
import { handleEmailChange, handleSubmit } from '../../../common/validation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { login, customerToken, selectSignInResult, logout } from '../../../store/slices/user.slice';

const Login = ({ isLogin }: { isLogin: boolean }) => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [customValidationMessage, setCustomValidationMessage] = useState('');
  const dispatch = useAppDispatch();
  const signInResult = useAppSelector(selectSignInResult);
  const navigate = useNavigate();

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
          {!isLogin
            ? 'LogIn'
            : `${signInResult?.firstName || 'Anonim'} ${signInResult?.lastName || ''}`}
        </button>
        {!isLogin ? (
          <form
            className="dropdown-menu p-4"
            onSubmit={(e) => {
              const body = handleSubmit(e);
              dispatch(customerToken(body)).then(() => {
                dispatch(login()).then((data) => {
                  const { payload } = data;
                  if (payload) {
                    navigate('/');
                  }
                });
              });
            }}
          >
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
                  required
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
                  required
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
        ) : (
          <form
            className="dropdown-menu p-5"
            onSubmit={(e) => {
              dispatch(logout());
              handleSubmit(e);
            }}
          >
            <div>{`Email: ${signInResult?.email}`}</div>
            <div className="dropdown-divider" />
            <button type="submit" className="btn">
              SignOut
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
