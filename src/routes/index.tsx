import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';

const Login = lazy(() => import('./Registration'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route
      path="registration"
      element={
        <Suspense fallback={<Spin />}>
          <Login />
        </Suspense>
      }
    />
    <Route
      path="reset"
      element={
        <Suspense fallback={<Spin />}>
          <Login />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
