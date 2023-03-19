import React, { Component } from "react";
import getImages from '../api';
import ImageGalleryItem from "../imageItem/ImageGalleryItem";
import css from './ImageGallery.module.css';
import {Loader} from '../loader/Loader';

export default class ImageGallery extends Component {
  state = {
    items: null,
    isLoading: false,
    error: false,
  }

  async componentDidUpdate(prevProps, prevState) {
      if (prevProps.searchText !== this.props.searchText) {
    try {
      this.setState({isLoading: true});
      const items = await getImages(this.props.searchText)
      this.setState({items: items.hits, isLoading: false})
      }
    catch (error) {
      this.setState({error: true, isLoading: false});
      console.log(error);
    }
    finally {
      this.setState({isLoading: false})
    }
  }
  }

  render() {
    const {items, isLoading, error} = this.state;
    return (
      <div>
        {error && (<p>Nothing was found</p>)}
        {isLoading ? <Loader/> : 
        <ul className={css.ImageGallery}>
            {items && items.map((item)=>(
                <ImageGalleryItem
                key={item.id}
                largeImageURL={item.largeImageURL}
                webformatURL={item.webformatURL}
                tags={item.tags}
                />
            ))}
        </ul>}
      </div>
    )
  }
}