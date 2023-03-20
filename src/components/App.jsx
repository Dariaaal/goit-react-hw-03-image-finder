import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import {ImageGallery} from "./imageGallery/ImageGallery";
import getImages from './api';
import {Loader} from './loader/Loader';
import {Button} from './button/Button'

export default class App extends Component {

  state = {
    searchText: '',
    items: null,
    isLoading: false,
    error: false,
    page: 1
  }

  async componentDidUpdate(prevProps, prevState) {
      if (prevState.searchText !== this.state.searchText) {
    try {
      this.setState({isLoading: true});
      const items = await getImages(this.state.searchText)
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

  handleSearch = (searchText) => {
    this.setState({searchText});
  }

  onLoadMore = () => {
    this.setState((prevState)=>({
      page: prevState.page + 1
    }))
  }
 
  render() {
    const {items, isLoading, error} = this.state;
      return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
    {error && (<p>Nothing was found</p>)}
    <Searchbar handleSearch={this.handleSearch}/>
    {isLoading ? <Loader/> : <ImageGallery items={this.state.items}/>}
    {items!==null && <Button onClick={this.onLoadMore}/>}
    </div>
  );
  }
}


