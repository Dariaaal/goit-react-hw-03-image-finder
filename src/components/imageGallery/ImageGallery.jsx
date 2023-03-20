// import React, { Component } from "react";
// import getImages from '../api';
// import ImageGalleryItem from "../imageItem/ImageGalleryItem";
// import css from './ImageGallery.module.css';
// import {Loader} from '../loader/Loader';
// import {Button} from '../button/Button'

// export default class ImageGallery extends Component {
//   state = {
//     items: null,
//     isLoading: false,
//     error: false,
//     page: 1
//   }

//   async componentDidUpdate(prevProps, prevState) {
//       if (prevProps.searchText !== this.props.searchText) {
//     try {
//       this.setState({isLoading: true});
//       const items = await getImages(this.props.searchText)
//       this.setState({items: items.hits, isLoading: false})
//       }
//     catch (error) {
//       this.setState({error: true, isLoading: false});
//       console.log(error);
//     }
//     finally {
//       this.setState({isLoading: false})
//     }
//   }
//   }
  
//   onLoadMore = () => {
//     this.setState((prevState)=>({
//       page: prevState.page + 1
//     }))
//   }

//   render() {
//     const {items, isLoading, error} = this.state;
//     return (
//       <div>
//         {error && (<p>Nothing was found</p>)}
//         {isLoading ? <Loader/> : 
//         <ul className={css.ImageGallery}>
//             {items && items.map((item)=>(
//                 <ImageGalleryItem
//                 key={item.id}
//                 largeImageURL={item.largeImageURL}
//                 webformatURL={item.webformatURL}
//                 tags={item.tags}
//                 />
//             ))}
//         </ul>}
//         <Button onClick={this.onLoadMore}/>
//       </div>
//     )
//   }
// }

import ImageGalleryItem from "../imageItem/ImageGalleryItem";
import css from './ImageGallery.module.css';

export const ImageGallery = ({items}) => {
  return (
            <ul className={css.ImageGallery}>
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
