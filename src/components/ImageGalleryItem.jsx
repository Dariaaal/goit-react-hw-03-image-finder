const ImageGalleryItem = ({id, webformatURL, largeImageURL, tags}) => {
    return <li key={id}>
    <a href={largeImageURL}><img src={webformatURL} alt={tags}/></a>
  </li>
}

export default ImageGalleryItem;
