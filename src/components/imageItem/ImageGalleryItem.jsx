import React, { Component } from "react";
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import { Modal } from 'components/modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  }

  openModal = () => {
    this.setState({showModal: true})
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render(){
  const {id, webformatURL, largeImageURL, tags} = this.props;
  return <li key={id} className={css.ImageGalleryItem}>
    <button type='button' onClick={this.openModal}><img src={webformatURL} alt={tags} className={css.image}/></button>
    {this.state.showModal && <Modal largeImageURL={largeImageURL} tags={tags} />}
  </li>
  }
}

// const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags}) => {
//     return <li key={id} className={css.ImageGalleryItem}>
//     <button type='button' onClick={()=>largeImageURL}><img src={webformatURL} alt={tags} className={css.image}/></button>
//     <Modal/>
//   </li>
// }

// ImageGalleryItem.propTypes = {
//   id: PropTypes.number,
//   webformatURL: PropTypes.string,
//   largeImageURL: PropTypes.string,
//   tags: PropTypes.string,
// }

// export default ImageGalleryItem;
