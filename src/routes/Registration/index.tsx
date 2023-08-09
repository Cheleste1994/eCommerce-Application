import React from 'react';
import '../../styles/registration.scss';

const Registration = () => (
  <div className="registration">
    <form className="registration__form row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
          <input type="email" className="form-control" id="inputEmail4" />
        </label>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Password
          <input type="password" className="form-control" id="inputPassword4" />
        </label>
      </div>
      <div className="col-12">
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
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">
          Address 2
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </label>
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
          <input type="text" className="form-control" id="inputCity" />
        </label>
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          State
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </label>
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">
          Zip
          <input type="text" className="form-control" id="inputZip" />
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

export default Registration;
