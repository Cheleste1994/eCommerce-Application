import React from 'react';
import Header from './components/header/header';
import Router from './routes';
import './styles/vendors.scss';

const App = () => (
  <>
    <Header />
    <main className="main">
      <Router />
    </main>
  </>
);

export default App;
