import React, { useState } from 'react';
import { handleEmailChange, handlePasswordChange, handleSubmit } from '../../common/validation';
import '../../styles/registration.scss';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [customValidationMessage, setCustomValidationMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registration">
      <form className="registration__form row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
            <input
              type="email"
              name="email"
              className={`form-control ${emailValid ? '' : 'is-invalid'}`}
              id="inputEmail4"
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
            {emailValid ? (
              <div className="valid-feedback">Email correct</div>
            ) : (
              <div className="invalid-feedback">Email incorrect</div>
            )}
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label password__input">
            Password
            <input
              name="password"
              type={showPassword ? 'text' : 'password'}
              className={`form-control ${passwordValid ? '' : 'is-invalid'}`}
              id="inputPassword4"
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
          <label htmlFor="inputAddress" className="form-label">
            Address
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
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
