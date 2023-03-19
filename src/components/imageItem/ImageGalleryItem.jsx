import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags}) => {
    return <li key={id} className={css.ImageGalleryItem}>
    <a href={largeImageURL}><img src={webformatURL} alt={tags} className={css.image}/></a>
  </li>
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
}

export default ImageGalleryItem;
