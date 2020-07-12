import React from 'react';
import './gallery.css';
// import Gallery from 'react-grid-gallery';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class CustomGallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        {this.props.images.map((image) => (
          <div
            key={image.src}
            className="gallery-item"
            onClick={() => {
              console.log('click', image.src, this.props.onSelectImage);
              this.props.onSelectImage && this.props.onSelectImage(image);
            }}
          >
            <img alt={image.caption} src={image.src} />
          </div>
        ))}
        <div className="gallery-item"></div>
      </div>
    );
  }
}

export default CustomGallery;
