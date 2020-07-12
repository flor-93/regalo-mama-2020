import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import IMAGES from './images';
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
            <Gallery images={IMAGES} />
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
    <p class="info-text">{!open && 'Haz CLICK en el REGALO'}</p>
    <p class="info-text2">{open && 'Haz CLICK DENTRO'}</p>
  </section>
);

class App extends React.Component {
  state = {
    giftBox: true,
    open: false,
    transitioningOut: false,
    selectedImage: null,
  };

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        this.afterImage();
      }
      if (e.key === 'ArrowLeft') {
        this.previousImage();
      }
      if (e.key === 'Escape') {
        this.closeImage();
      }
    });
  }

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
  handleSelectImage = (image) => {
    this.setState({ selectedImage: image });
  };
  closeImage = () => {
    this.setState({ selectedImage: null });
  };
  previousImage = () => {
    const previousImage = IMAGES[IMAGES.indexOf(this.state.selectedImage) - 1];
    if (previousImage) {
      this.setState({ selectedImage: previousImage });
    }
  };

  afterImage = () => {
    const afterImage = IMAGES[IMAGES.indexOf(this.state.selectedImage) + 1];
    if (afterImage) {
      this.setState({ selectedImage: afterImage });
    }
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
          <Gallery images={IMAGES} onSelectImage={this.handleSelectImage} />
        )}
        {/* <p class="info">{'Haz CLICK DENTRO'}</p> */}

        {this.state.selectedImage && (
          <div class="overlay">
            {IMAGES.indexOf(this.state.selectedImage) > 0 && (
              <svg
                onClick={this.previousImage}
                className="arrow left"
                fill="white"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 512 512"
              >
                <path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"></path>
              </svg>
            )}
            {IMAGES.indexOf(this.state.selectedImage) < IMAGES.length - 1 && (
              <svg
                onClick={this.afterImage}
                className="arrow right"
                fill="white"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100%"
                height="100%"
                viewBox="0 0 512 512"
              >
                <path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"></path>
              </svg>
            )}
            <img
              alt="selected"
              className="selected-image"
              src={this.state.selectedImage.src}
            />
            <svg
              onClick={this.closeImage}
              className="close"
              fill="white"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100%"
              height="100%"
              viewBox="0 0 512 512"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"></path>
            </svg>
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
