import React from 'react';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap-select/dist/css/bootstrap-select.css';
import 'bootstrap-select/dist/js/bootstrap-select.js';
import './assets/scss/style.scss';
import IndexRoute from './Routes/routes';
import $ from 'jquery';

function App() {
   return (
   <div className="App">
      <div className="wrapper">
         <IndexRoute />
      </div>  
    </div>
  );
}

export default App;
