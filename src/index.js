import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Gallery from './gallery.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';

const GiftBox = ({ onBoxClick, open, transitioningOut }) => (
  <section class="above-fold">
    <div class="wrap-present">
      <div
        class={`present-box${open ? ' open' : ''}${
          transitioningOut ? ' transition' : ''
        }`}
        id="present"
        onClick={onBoxClick}
      >
        <div class="present">
          <div class="img-wrap" id="present-image">
            <Gallery />
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
    <p class="info-text">{!open && 'Haz CLICK para abrirlo'}</p>
  </section>
);

class App extends React.Component {
  state = {
    giftBox: true,
    open: false,
    transitioningOut: false,
    selectedImage: null,
  };
  handleBoxClick = () => {
    this.setState(() => {
      const newState = {
        open: true,
        transitioningOut: this.state.open, // transition out on next click after open
      };

      if (newState.transitioningOut) {
        setTimeout(() => {
          this.setState({ giftBox: false });
        }, 1000);
      }
      return newState;
    });
  };
  handleSelectImage = (src) => {
    this.setState({ selectedImage: src });
  };
  closeImage = () => {
    this.setState({ selectedImage: null });
  };
  render() {
    return (
      <>
        {this.state.giftBox && (
          <GiftBox
            onBoxClick={this.handleBoxClick}
            open={this.state.open}
            transitioningOut={this.state.transitioningOut}
          />
        )}

        {!this.state.giftBox && (
          <Gallery onSelectImage={this.handleSelectImage} />
        )}

        {this.state.selectedImage && (
          <div class="overlay">
            <img
              alt="selected"
              className="selected-image"
              src={this.state.selectedImage}
            />
          </div>
        )}
      </>
    );
  }
}

render(<App />, document.querySelector('#content'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
