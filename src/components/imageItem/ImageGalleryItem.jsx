import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags}) => {
    return <li key={id} className={css.ImageGalleryItem}>
    <button type='button' onClick={()=>largeImageURL}><img src={webformatURL} alt={tags} className={css.image}/></button>
  </li>
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
}

export default ImageGalleryItem;
