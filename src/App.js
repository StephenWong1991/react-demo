import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Sider from './components/Sider';
import routesConfig from './routes/config';

function App() {
  return (
    <Router>
      <Sider menus={routesConfig.menus} />
      <Routes />
    </Router>
  );
}

export default App;
