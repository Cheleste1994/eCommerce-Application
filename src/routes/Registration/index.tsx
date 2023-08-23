import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleEmailChange, handlePasswordChange, handleSubmit } from '../../common/validation';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createCustomer, customerToken, login, selectIsLogin } from '../../store/slices/user.slice';
import '../../styles/registration.scss';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [customValidationMessage, setCustomValidationMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLogin = useAppSelector(selectIsLogin);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return (
    <div className="registration">
      <form
        className="registration__form row g-3"
        onSubmit={async (e) => {
          const body = handleSubmit(e);
          if (emailValid && passwordValid) {
            const create = await dispatch(createCustomer(body));
            if (create.payload) {
              await dispatch(customerToken(body));
              await dispatch(login());
            }
          }
        }}
      >
        <div className="col-md-6">
          <label htmlFor="firstName">
            First name
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="First name"
              required
            />
          </label>

          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName">
            Last name
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              required
            />
          </label>

          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              name="email"
              className={`form-control ${emailValid ? '' : 'is-invalid'}`}
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
            {emailValid ? (
              <div className="valid-feedback">Email correct</div>
            ) : (
              <div className="invalid-feedback">Email incorrect</div>
            )}
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label password__input">
            Password
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              className={`form-control ${passwordValid ? '' : 'is-invalid'}`}
              value={password}
              onChange={(e) =>
                handlePasswordChange(
                  e.target.value,
                  setPassword,
                  setPasswordValid,
                  setCustomValidationMessage,
                )
              }
              title={customValidationMessage}
              required
            />
            <input
              type="checkbox"
              className="form-check-input"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="adress" className="form-label">
            Address
            <input type="text" name="adress" className="form-control" placeholder="1234 Main St" />
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
            <input type="text" className="form-control" id="inputCity" />
          </label>
        </div>
        <div className="col-12">
          <div className="form-check">
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
              <input className="form-check-input" type="checkbox" id="gridCheck" />
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
