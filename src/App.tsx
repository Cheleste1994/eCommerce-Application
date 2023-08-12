import React from 'react';
import { Link } from 'react-router-dom';
import Router from './routes';
import Login from './components/shareds/login';
import Cart from './components/shareds/cart/index';
import './styles/vendors.scss';

const App = () => (
  <>
    <header className="header">
      <div className="title">
        <h1>7754.by</h1>
        <span>Small Shop</span>
      </div>
      <nav className="search">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <Login />
      <div className="cart">
        <Cart count={2} />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
    <main className="main">
      <Router />
    </main>
  </>
);

export default App;
