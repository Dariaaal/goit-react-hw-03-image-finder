import css from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags}) => {
    return <li key={id} className={css.ImageGalleryItem}>
    <a href={largeImageURL}><img src={webformatURL} alt={tags} className={css.image}/></a>
  </li>
}

export default ImageGalleryItem;
