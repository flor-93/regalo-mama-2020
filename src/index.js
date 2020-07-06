import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './index.css';

class ReactClass extends Component {
  render() {
    return (
      <div className="cnt">
        <Carousel>
          <div className="img">
            <img
              alt="Harry Potter 1"
              src="https://www.cerodosbe.com/uploads/s1/10/04/73/56/el-universo-harry-potter-aterriza-a-lo-grande-en-nueva-york_15_970x597.jpeg"
            />
            <p className="legend">Legend 1</p>
          </div>
          <div className="img">
            <img
              alt="Harry Potter 2"
              src="https://cdn.pocket-lint.com/r/s/970x/assets/images/150401-tv-feature-harry-potter-image1-vpdnsqfrou-jpg.webp?v1"
            />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

ReactDOM.render(<ReactClass />, document.querySelector('#content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
