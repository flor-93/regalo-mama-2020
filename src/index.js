import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Lección 2 - Ejercicio 1
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

ReactDOM.render(
  <div>
    <p>
      To get started, edit <code>src/App.js</code> and save to <b>reload</b>
    </p>
  </div>,
  document.getElementById('root'),
);
*/

//Lección 2 - Ejercicio 2
/*
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
ReactDOM.render(element, document.getElementById('study'));
*/

//Lección 2 - Ejercicio 3
/*
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
ReactDOM.render(form, document.getElementById('form'));
*/

//Lección 3 - Ejercicio 1
/*
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
*/

//Lección 3 - Ejercicio 2
const title = React.createElement('div', { id: 'title' }, 'Pestañas con react');

ReactDOM.render(title, document.getElementById('container'));

const createTabElement = React.createFactory('li');

const tab1 = createTabElement({ class: 'tabs', type: 'none' }, 'Física');
const tab2 = createTabElement({ class: 'tabs', type: 'none' }, 'Química');
const tab3 = createTabElement({ class: 'tabs', type: 'none' }, 'Biología');
const tab4 = createTabElement({ class: 'tabs', type: 'none' }, 'Inglés');
const tab5 = createTabElement({ class: 'tabs', type: 'none' }, 'Sociales');
const tab6 = createTabElement({ class: 'tabs', type: 'none' }, 'Historia');
const tab7 = createTabElement({ class: 'tabs', type: 'none' }, 'Deporte');

const tabs = [tab1, tab2, tab3, tab4, tab5, tab6, tab7];

const listTabs = React.createElement('ul', { id: 'list-tabs' }, tabs);

ReactDOM.render(listTabs, document.getElementById('tabs'));

const createParagraphElement = React.createFactory('p');

const pGral = createParagraphElement(
  '',
  'Ejemplo de pestañas creadas con elementos estáticos de React y CSS',
);

const pTab1 = createParagraphElement(
  { class: 'info', id: 'fisica' },
  'La física (del latín physica, y este del griego antiguo φυσικός, «natural, relativo a la naturaleza»)1​ es la ciencia natural que estudia los componentes fundamentales del Universo, la energía, la materia, el espacio-tiempo y las interacciones fundamentales.',
);

const pTab2 = createParagraphElement(
  { class: 'info', id: 'quimica' },
  'La química es la ciencia que estudia la composición, estructura y propiedades de la materia, así como los cambios que esta experimenta durante las reacciones químicas y su relación con la energía.',
);

const pTab3 = createParagraphElement(
  { class: 'info', id: 'biologia' },
  'La biología (del griego βίος [bíos] "vida", y -λογία [-logía] "tratado, estudio, ciencia",1​ que se connota como la "ciencia de la vida"2​) es la rama de la ciencia que estudia los procesos naturales3​ de los organismos vivos,4​ considerando su anatomía, fisiología, evolución, desarrollo, distribución y relaciones.',
);

const pTab4 = createParagraphElement(
  { class: 'info', id: 'ingles' },
  'El idioma inglés (English language o English, pronunciado /ˈɪŋɡlɪʃ/) es una lengua germánica occidental que surgió en los reinos anglosajones de Inglaterra y se extendió hasta el Norte en lo que se convertiría en el sudeste de Escocia, bajo la influencia del Reino de Northumbria.',
);

const pTab5 = createParagraphElement(
  { class: 'info', id: 'sociales' },
  'Las ciencias sociales son las ramas de la ciencia relacionadas con la sociedad y el comportamiento humano.',
);

const pTab6 = createParagraphElement(
  { class: 'info', id: 'historia' },
  'La historia es la ciencia que tiene como objetivo el estudio de sucesos del pasado, tradicionalmente de la humanidad1​, y como método, el propio de las ciencias sociales/humanas, así como el de las ciencias naturales en un marco de interdisciplinariedad.',
);

const pTab7 = createParagraphElement(
  { class: 'info', id: 'deporte' },
  'El deporte es una actividad reglamentada, normalmente de carácter competitivo y que puede mejorar la condición física2​ de quien lo practica, y además tiene propiedades que lo diferencian del juego.',
);

const createImgElement = React.createFactory('img');

const img1 = createImgElement({
  src:
    'https://concepto.de/wp-content/uploads/2018/08/f%C3%ADsica-e1534938838719.jpg',
  alt: 'fisica',
  width: '500',
});

const img2 = createImgElement({
  src: 'https://cienciadehoy.com/wp-content/uploads/2019/05/89676620.jpg',
  alt: 'quimica',
  width: '500',
});

const img3 = createImgElement({
  src:
    'https://www.ecestaticos.com/image/clipping/9714c7c06868f88fba1f532ee53e155d/nutrigenetica-la-biologia-molecular-en-el-campo-de-la-nutricion.jpg',
  alt: 'biologia',
  width: '500',
});

const img4 = createImgElement({
  src:
    'https://imagenes.universia.net/gc/net/images/educacion/p/pr/pro/professores-ingles-concorrer-bolsa-estudar-eua-noticias.jpg',
  alt: 'ingles',
  width: '500',
});

const img5 = createImgElement({
  src:
    'https://upload.wikimedia.org/wikipedia/commons/6/63/GlobalSocial_850.jpg',
  alt: 'sociales',
  width: '500',
});

const img6 = createImgElement({
  src:
    'https://www.ecestaticos.com/imagestatic/clipping/af8/705/af87059eaa01d0ce789779b415c78134/como-se-debe-ensenar-la-historia.jpg?mtime=1579565836',
  alt: 'historia',
  width: '500',
});

const img7 = createImgElement({
  src:
    'https://s.france24.com/media/display/6aca8d1a-7783-11ea-9cf2-005056bf87d6/w:1280/p:16x9/WEB%2005ABR%20DEPORTES%20PORTADA%20FOTO.webp',
  alt: 'deporte',
  width: '500',
});

const physical = [pGral, pTab1, img1];
const chemistry = [pGral, pTab2, img2];
const biology = [pGral, pTab3, img3];
const english = [pGral, pTab3, img4];
const social = [pGral, pTab3, img5];
const history = [pGral, pTab6, img6];
const sport = [pGral, pTab7, img7];

ReactDOM.render(physical, document.querySelector('#info'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
