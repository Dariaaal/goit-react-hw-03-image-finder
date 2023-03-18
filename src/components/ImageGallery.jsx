import React, { Component } from "react";
import getImages from './api';
import ImageGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
    items: null,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchText !== this.props.searchText) {
      getImages(this.props.searchText).then((items) => this.setState({items: items.hits}))
    }
  }

  render() {
    const {items} = this.state;
    return (
        <ul>
            {items && items.map((item)=>(
                <ImageGalleryItem
                key={item.id}
                largeImageURL={item.largeImageURL}
                webformatURL={item.webformatURL}
                tags={item.tags}
                />
            ))}
        </ul>
    )
  }
}
