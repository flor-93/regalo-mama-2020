import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// ReactDOM.render(
//   <div>
//     <p>
//       To get started, edit <code>src/App.js</code> and save to <b>reload</b>
//     </p>
//   </div>,
//   document.getElementById('root'),
// );

const element = (
  <div>
    <h1>Estudiá programación en Next-U</h1>
    <p>
      La mejor plataforma online para aprender el cursos que quieras, con la
      mejor asesoria de tutores a disposicion del alumno, en ampla
      dosponibilidad horaria
    </p>
    <a href="https://learn.nextu.com/">Next-U</a>
  </div>
);
// ReactDOM.render(element, document.getElementById('study'));

const form = (
  <form class="react-form">
    <fieldset>
      <legend>Formulario</legend>
      <label for="name">Nombre Completo</label>
      <input id="name" type="text" name="nombre" value=""></input>
      <br />

      <label for="email">Correo electrónico</label>
      <input id="email" type="email" name="email"></input>
      <br />

      <label for="asunto">Asunto</label>
      <input id="asunto" type="text" name="asunto" value=""></input>
      <br />

      <label for="mensaje">Mensaje</label>
      <br />
      <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea>
    </fieldset>
  </form>
);
// ReactDOM.render(form, document.getElementById('form'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
