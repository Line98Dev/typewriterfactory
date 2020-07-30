import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';
import {NavMenu} from "./components";
import {Stream} from "./components";

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Stream/>
    </div>
  );
}

export default App;
