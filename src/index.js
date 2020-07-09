import React, { useImperativeHandle } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import * as serviceWorker from './serviceWorker';
import abrazoTiernis from './img/abrazo-tiernis.jpg';
import acto2016Cele from './img/acto-2016-cele.jpg';
import aeropuertox3 from './img/aeropuerto-mama-cele-luji.jpg';
import bailandoMama from './img/bailando-mama.jpg';
import brindisFotoVieja from './img/brindis-mama-abuela-isabel-yaya.png';
import capeletinisFb from './img/capeletinis-fb.jpg';
import lujiComiendoBebe from './img/cele-luji-comiendo-mama.jpg';
import celeMamax2 from './img/cele-mamax2.jpg';
import centroCultural from './img/centro-cultural.jpg';
import chizzaInterior from './img/chizza-interior.jpg';
import chizzaPuerta from './img/chizza-puerta.jpg';
import conejoMama from './img/conejo-mama-luji.jpg';
import cumple50Entrada from './img/cumple-50-entrada.jpg';
import cumple50Torta from './img/cumple-50-torta.jpg';
import cumple51 from './img/cumple-51.jpg';
import cumple52 from './img/cumple-52.jpg';
import cumple2007One from './img/cumple-2007-1.jpg';
import cumple2007Two from './img/cumple-2007-2.jpg';
import cumple2007Three from './img/cumple-2007-3.jpg';
import cumple2014 from './img/cumple-2014.jpg';
import cumpleLala2012 from './img/cumple-lala-2012.jpg';
import egresoDaLala from './img/egreso-directora-de-arte-lala.jpg';
import egresoJardinFlor from './img/egreso-jardin-flor.jpg';
import egresoMama from './img/egreso-mama.png';
import familiaAbuelaNorma from './img/familia-abuela-norma-parejas.jpg';
import familiaAbuelas from './img/familia-con-abuelas.jpg';
import hamsterMama from './img/hamster-hamtaro.jpg';
import quinceLala from './img/familia-15-lala.jpg';
import lalaCuernitos from './img/lala-cuernitos-mama.jpg';
import lujiDanzaAbrazo from './img/luji-danza-abrazo-mama.jpg';
import lujiDanzaAmarilla from './img/luji-danza-amarilla-mama.jpg';
import mamaAbuelaBebes from './img/mama-abuela-bebes.png';
import mamaAbuelaPaseando from './img/mama-abuela-paseando.png';
import mamaAmaca from './img/mama-amaca-paraguaya.jpg';
import mamaAmigasAndrea from './img/mama-amigas-andrea.jpg';
import mamaAsiento from './img/mama-asiento-exterior.jpg';
import mamaCalzone from './img/mama-calzone.jpg';
import mamaEscuela from './img/mama-escuela.jpg';
import mamaFilmando from './img/mama-filmando-1997.png';
import mamaJovenFlores from './img/mama-joven-flores.png';
import mamaJovenRueda from './img/mama-joven-rueda.png';
import mamaLalaFlorPeques from './img/mama-lala-flor-peques.jpg';
import mamaLalaNavidad1997 from './img/mama-lala-navidad-1997.png';
import mamaLanceAfuera from './img/mama-lance-afuera.jpg';
import mamaLanceSilla from './img/mama-lance-silla.jpg';
import mamaLanceUpa from './img/mama-lance-upa.jpg';
import mamaLujiCeleNo from './img/mama-luji-celeno.jpg';
import mamaMoreLuji from './img/mama-more-luji-x2.jpg';
import mamaPrimaMaridos from './img/mama-papa-claudia-daniel.jpg';
import mamaPapaComida from './img/mama-papa-comida.jpg';
import mapaPapaLujiArboles from './img/mama-papa-luji-arboles.jpg';
import mamaPapaLujiLaguna from './img/mama-papa-luji-laguna.jpg';
import mamaPapaLujiMartuDelfi from './img/mama-papa-luji-martu-delfi.jpg';
import mamaPapaPregaleria from './img/mama-papa-pregaleria.jpg';
import mamaPile from './img/mama-pile .jpg';
import mamaViaje from './img/mama-viaje.jpg';
import mamaVicenteQuince from './img/mama-vicente-15.png';
import mariasMamaPrima from './img/marias-mama-claudia-prima.jpg';
import mariasMama2 from './img/marias-y-mama-2.jpg';
import mariasMama from './img/marias-y-mama.jpg';
import microViajeX4 from './img/marias-y-mama.jpg';
import nieveFamilia from './img/nieve.jpg';
import piletaPequesLalaFlor from './img/pileta-peques-lala-flor.jpg';
import pizzasCasa2012Two from './img/pizzas-casa-2012-2.jpg';
import pizzasCasa2015 from './img/pizzas-casa-2015.jpg';
import previajeX4 from './img/previaje-mama-papa-cele-luji.jpg';
import salidaComidaX2 from './img/salida-comida-x2.jpg';
import salidaComida from './img/salida-comida.jpg';
import salidaMamaLala from './img/salida-mama-lala.jpg';
import salidaPileta from './img/salida-pileta.jpg';
import simonMama from './img/simon-mama.jpg';
import sonrisaPileta from './img/sonrisa-delantepileta.jpg';
import starburcks from './img/starbucks-lala-mama.jpg';
import temaiken2009One from './img/temaiken-2009-1.jpg';
import temaiken2009Two from './img/temaiken-2009-2.jpg';
import tiosPrimosX2Flia from './img/tios-primos-x2-flia-2013.jpg';
import tweetyMama from './img/tweety-mama.jpg';
import veranoMamaAbuela from './img/verano-mama-abuela.png';
import veranoMayasMamaAbuela from './img/verano-mayas-mama-abuela.png';
import yayaLalaFlor from './img/yaya-lala-flor.jpg';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const IMAGES = [
  {
    src: abrazoTiernis,
    thumbnail: abrazoTiernis,
    // thumbnailHeight: 212,
    thumbnailHeight: 174,
    caption: 'After Rain (Jeshu John - designerspics.com)',
  },

  {
    src: acto2016Cele,
    thumbnail: acto2016Cele,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: aeropuertox3,
    thumbnail: aeropuertox3,
    tags: [
      { value: 'Ocean', title: 'Ocean' },
      { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: bailandoMama,
    thumbnail: bailandoMama,
  },

  {
    src: brindisFotoVieja,
    thumbnail: brindisFotoVieja,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: capeletinisFb,
    thumbnail: capeletinisFb,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: lujiComiendoBebe,
    thumbnail: lujiComiendoBebe,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: celeMamax2,
    thumbnail: celeMamax2,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: centroCultural,
    thumbnail: centroCultural,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: chizzaInterior,
    thumbnail: chizzaInterior,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: chizzaPuerta,
    thumbnail: chizzaPuerta,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: conejoMama,
    thumbnail: conejoMama,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple50Entrada,
    thumbnail: cumple50Entrada,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple50Torta,
    thumbnail: cumple50Torta,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple51,
    thumbnail: cumple51,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple52,
    thumbnail: cumple52,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple2007One,
    thumbnail: cumple2007One,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple2007Two,
    thumbnail: cumple2007Two,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple2007Three,
    thumbnail: cumple2007Three,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumple2014,
    thumbnail: cumple2014,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: cumpleLala2012,
    thumbnail: cumpleLala2012,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: egresoDaLala,
    thumbnail: egresoDaLala,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: egresoJardinFlor,
    thumbnail: egresoJardinFlor,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: egresoMama,
    thumbnail: egresoMama,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: familiaAbuelaNorma,
    thumbnail: familiaAbuelaNorma,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: familiaAbuelas,
    thumbnail: familiaAbuelas,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: hamsterMama,
    thumbnail: hamsterMama,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: quinceLala,
    thumbnail: quinceLala,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: lalaCuernitos,
    thumbnail: lalaCuernitos,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: lujiDanzaAbrazo,
    thumbnail: lujiDanzaAbrazo,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: lujiDanzaAmarilla,
    thumbnail: lujiDanzaAmarilla,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaAbuelaBebes,
    thumbnail: mamaAbuelaBebes,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaAbuelaPaseando,
    thumbnail: mamaAbuelaPaseando,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaAmaca,
    thumbnail: mamaAmaca,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaAmigasAndrea,
    thumbnail: mamaAmigasAndrea,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaAsiento,
    thumbnail: mamaAsiento,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaCalzone,
    thumbnail: mamaCalzone,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaEscuela,
    thumbnail: mamaEscuela,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaFilmando,
    thumbnail: mamaFilmando,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaJovenFlores,
    thumbnail: mamaJovenFlores,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaJovenRueda,
    thumbnail: mamaJovenRueda,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaLalaFlorPeques,
    thumbnail: mamaLalaFlorPeques,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaLalaNavidad1997,
    thumbnail: mamaLalaNavidad1997,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaLanceAfuera,
    thumbnail: mamaLanceAfuera,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaLanceSilla,
    thumbnail: mamaLanceSilla,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaLanceUpa,
    thumbnail: mamaLanceUpa,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaLujiCeleNo,
    thumbnail: mamaLujiCeleNo,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaMoreLuji,
    thumbnail: mamaMoreLuji,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaPrimaMaridos,
    thumbnail: mamaPrimaMaridos,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaPapaComida,
    thumbnail: mamaPapaComida,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mapaPapaLujiArboles,
    thumbnail: mapaPapaLujiArboles,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaPapaLujiLaguna,
    thumbnail: mamaPapaLujiLaguna,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaPapaLujiMartuDelfi,
    thumbnail: mamaPapaLujiMartuDelfi,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaPapaPregaleria,
    thumbnail: mamaPapaPregaleria,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaPile,
    thumbnail: mamaPile,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaViaje,
    thumbnail: mamaViaje,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mamaVicenteQuince,
    thumbnail: mamaVicenteQuince,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mariasMamaPrima,
    thumbnail: mariasMamaPrima,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mariasMama2,
    thumbnail: mariasMama2,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: mariasMama,
    thumbnail: mariasMama,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: microViajeX4,
    thumbnail: microViajeX4,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: nieveFamilia,
    thumbnail: nieveFamilia,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: piletaPequesLalaFlor,
    thumbnail: piletaPequesLalaFlor,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: pizzasCasa2012Two,
    thumbnail: pizzasCasa2012Two,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: pizzasCasa2015,
    thumbnail: pizzasCasa2015,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: previajeX4,
    thumbnail: previajeX4,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: salidaComidaX2,
    thumbnail: salidaComidaX2,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: salidaComida,
    thumbnail: salidaComida,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: salidaMamaLala,
    thumbnail: salidaMamaLala,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: salidaPileta,
    thumbnail: salidaPileta,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: simonMama,
    thumbnail: simonMama,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: sonrisaPileta,
    thumbnail: sonrisaPileta,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: starburcks,
    thumbnail: starburcks,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: temaiken2009One,
    thumbnail: temaiken2009One,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: temaiken2009Two,
    thumbnail: temaiken2009Two,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: tiosPrimosX2Flia,
    thumbnail: tiosPrimosX2Flia,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: tweetyMama,
    thumbnail: tweetyMama,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: veranoMamaAbuela,
    thumbnail: veranoMamaAbuela,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: veranoMayasMamaAbuela,
    thumbnail: veranoMayasMamaAbuela,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },

  {
    src: yayaLalaFlor,
    thumbnail: yayaLalaFlor,
    tags: [
      // { value: 'Ocean', title: 'Ocean' },
      // { value: 'People', title: 'People' },
    ],
    caption: 'Boats (Jeshu John - designerspics.com)',
  },
];

class Animation extends React.Component {
  state = { open: false };
  toggleOpen = () => {
    this.setState(() => ({
      open: !this.state.open,
    }));
  };
  render() {
    return (
      <section class="above-fold">
        <div class="wrap-present">
          <div
            class={`present-box ${this.state.open ? 'open' : ''}`}
            id="present"
            onClick={this.toggleOpen}
          >
            <div class="present">
              <div class="img-wrap" id="present-image">
                <Gallery enableImageSelection={false} images={IMAGES} />
              </div>
            </div>
            <div class="side front"></div>
            <div class="side back"></div>
            <div class="side left"></div>
            <div class="side right"></div>
            <div class="side top">
              <span class="to">
                <span class="name" id="nametag">
                  Má
                </span>
              </span>
            </div>
            <div class="side bottom"></div>
          </div>
        </div>
        <p class="info-text">Haz CLICK para abrirlo</p>
      </section>
    );
  }
}

class Web extends React.Component {
  render() {
    return (
      <div>
        <h1>FELIZ CUMPLE MÁ</h1>
        <p></p>
        <div>
          <Gallery enableImageSelection={false} images={IMAGES} />
        </div>
      </div>
    );
  }
}

// const Header = () => (
//   <div>
//     <h1>FELIZ CUMPLE MÁ</h1>
//     <p></p>
//   </div>
// );

const App = () => (
  <div>
    <Animation />
  </div>
);

render(<App />, document.querySelector('#content'));
// render(<Web />, document.body);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
