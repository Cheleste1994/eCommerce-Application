import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login, selectIsAuth, selectIsLogin } from '../../store/slices/user.slice';
import Cart from '../shareds/cart';
import CatalogMenu from '../shareds/catalogMenu';
import Login from '../shareds/login';

const Header = () => {
  const isToken = useAppSelector(selectIsAuth);
  const isLogin = useAppSelector(selectIsLogin);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLogin && isToken) {
      dispatch(login());
    }
  }, [isLogin, dispatch, isToken]);

  return (
    <header className="header">
      <Link to="/" className="header__link-main">
        <div className="title">
          <h1>7754.by</h1>
          <span>Small Shop</span>
        </div>
      </Link>
      <CatalogMenu />
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
      <Login isLogin={isToken} />
      <div className="cart">
        <Cart count={2} />
      </div>
    </header>
  );
};

export default Header;
