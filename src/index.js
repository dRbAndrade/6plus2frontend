import React from 'react';
import ReactDOM from 'react-dom';
import RouteList from './pages/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RouteList/>
  </React.StrictMode>,
  document.getElementById('root')
);