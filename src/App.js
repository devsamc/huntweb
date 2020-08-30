import React from 'react';
import Routes from './routes';

import './styles.css';

import Header from './componentes/Header/index';

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
