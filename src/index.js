import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Lección 2 - Ejercicio 1
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

//Lección 2 - Ejercicio 2
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

//Lección 2 - Ejercicio 3
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

//Lección 3 - Ejercicio 1
const img = React.createElement('img', {
  id: 'imagen',
  src: 'http://www.annarecetasfaciles.com/files/pan-casero-1024x575.jpg',
});
const title = React.createElement(
  'h1',
  { id: 'title-recipe' },
  'Receta de pan, fácil de hacer',
);

const header = [img, title];

ReactDOM.render(header, document.getElementById('header'));

const subtittle1 = React.createElement(
  'p',
  { id: 'subtitle-ingredients' },
  'A continuacíon se indican los ingredientes necesarios para hacer la receta del pan:',
);

const ingredient1 = React.createElement(
  'li',
  {
    class: 'ingredients',
    type: 'circle',
  },
  [React.createElement('b', null, '15 gr'), ' levadura fresca'],
);

const ingredient2 = React.createElement(
  'li',
  {
    class: 'ingredients',
    type: 'circle',
  },
  [React.createElement('b', null, '1 cda'), ' de azúcar'],
);

const ingredient3 = React.createElement(
  'li',
  {
    class: 'ingredients',
    type: 'circle',
  },
  [React.createElement('b', null, '1 cda'), ' de sal'],
);

const ingredient4 = React.createElement(
  'li',
  {
    class: 'ingredients',
    type: 'circle',
  },
  [React.createElement('b', null, '3 cdas'), ' de aceite de oliva'],
);

const ingredient5 = React.createElement(
  'li',
  {
    class: 'ingredients',
    type: 'circle',
  },
  [
    React.createElement('b', null, '300 ml'),
    ' de agua templada',
    React.createElement('i', null, ' (1 taza 1/2)'),
  ],
);

const ingredient6 = React.createElement(
  'li',
  {
    class: 'ingredients',
    type: 'circle',
  },
  [React.createElement('b', null, '500 gr'), ' de harina'],
);
const ingredients = [
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  ingredient6,
];

const listIngredients = React.createElement('ul', '', ingredients);

const containerIngredients = [subtittle1, listIngredients];

ReactDOM.render(containerIngredients, document.getElementById('ingredients'));

const subtittle2 = React.createElement(
  'p',
  { id: 'subtitle-preparation' },
  'Ahora que ya tienes los ingredientes medidos y preparados sigue los siguientes pasos para lograr hacer tu pan.',
);

const preparation1 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Primero hay que hidrtar la levadura. Pon la levadura con un poco de agua, el aceite y el azúcar. Revuelve hasta que todo este disuelto.',
);

const preparation2 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Incorpora 5 cdas. de harina y cuando esté todo integrado deja reposar 10 minutos. Tapado con repasador.',
);

const preparation3 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Termina de incorporar la harina junto con la sal y el agua.',
);

const preparation4 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Amasa durante unos 2 minutos aprox. y deja reposar unos 30 minutos.',
);

const preparation5 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Saca el aire amansando un poco más y forma un bollo que debes colocar en la asadera aceitada.',
);

const preparation6 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Aplica unos cortes y espolvorea con harina',
);

const preparation7 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Tapa con un recipiente apto de horno y aceitado. Esto es para consrevar la humedad',
);

const preparation8 = React.createElement(
  'li',
  {
    class: 'preparations',
    type: '1',
  },
  'Por último lleva al horno recién encendido a 200 grados celcius, fuego arriba y abajo, durante 45 minutos aprox.',
);

const preparations = [
  preparation1,
  preparation2,
  preparation3,
  preparation4,
  preparation5,
  preparation6,
  preparation7,
  preparation8,
];

const listPreparations = React.createElement('ul', '', preparations);

const subtittle3 = React.createElement(
  'p',
  { id: 'subtitle-final' },
  'Ya haz hecho tu primer pan, ahora disfrútalo.',
);

const containerPreparation = [subtittle2, listPreparations, subtittle3];

ReactDOM.render(containerPreparation, document.getElementById('preparation'));

// ReactDOM.render(header, document.getElementById('recipe'));

//Lección 3 - Ejercicio 2
/* 
const title = React.createElement('div', { id: 'title' }, 'Pestañas con react');

const tab1 = React.createElement('li', { id: 'tab-1' }, 'Física');
const tab2 = React.createElement('li', { id: 'tab-2' }, 'Química');
const tab3 = React.createElement('li', { id: 'tab-3' }, 'Biología');
const tab4 = React.createElement('li', { id: 'tab-4' }, 'Inglés');
const tab5 = React.createElement('li', { id: 'tab-5' }, 'Sociales');
const tab6 = React.createElement('li', { id: 'tab-6' }, 'Historia');
const tab7 = React.createElement('li', { id: 'tab-7' }, 'Deporte');

const pGeral = React.createElement('p', { id: '' });
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
