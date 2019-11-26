import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app
import styleClass from "./BigImage.module.css";
import { config } from "../../../../config";

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

export default class BigImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      photos: this.props.photos
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <img
          className={styleClass.Image}
          onClick={() => this.setState({ isOpen: true })}
          src={config.serverURL + this.props.photo.path}
        ></img>

        {isOpen && (
          <Lightbox
            mainSrc={config.serverURL + this.state.photos[photoIndex]}
            nextSrc={
              config.serverURL +
              this.state.photos[(photoIndex + 1) % this.state.photos.length]
            }
            prevSrc={
              config.serverURL +
              this.state.photos[
                (photoIndex + this.state.photos.length - 1) %
                  this.state.photos.length
              ]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + this.state.photos.length - 1) %
                  this.state.photos.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % this.state.photos.length
              })
            }
          />
        )}
      </div>
    );
  }
}
