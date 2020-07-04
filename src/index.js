import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

class ReactClass extends Component {
  render() {
    return (
      <div id="form">
        <h1 id="header">Ingreso</h1>

        <div id="field">
          <div id="cnt1" className="cnt">
            <i className="fa fa-envelope input-group input-group-prepend input-group-text icon" />
            <input
              type="email"
              className="inp input-group input-group-prepend input-group-text form-control"
              name="mail"
              placeholder="Correo Electrónico"
            />
          </div>

          <div id="cnt2" className="cnt">
            <i className="fa fa-key input-group input-group-prepend input-group-text icon" />
            <input
              type="password"
              className="inp inp input-group input-group-prepend input-group-text form-control"
              name="contraseña"
              placeholder="Contraseña"
            />
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ReactClass />, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
