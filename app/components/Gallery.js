import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let alternate = 'http://www.nfc-pre.org/home/modules/activeshow_mod/images/picture/1443146472.jpg';
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let {title, imageLinks, infoLink} = item.volumeInfo;
            //console.log(item);
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : alternate}
                  alt="book image"
                  className="book-img"
                />
                <div className="book-text">
                  {title}
                </div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
