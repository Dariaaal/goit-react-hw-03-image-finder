import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import {ImageGallery} from "./imageGallery/ImageGallery";
import getImages from './api';
import {Loader} from './loader/Loader';
import {Button} from './button/Button';
// import Notiflix from 'notiflix';

export default class App extends Component {

  state = {
    searchText: '',
    items: [],
    isLoading: false,
    error: false,
    page: 1,
  }

  async componentDidUpdate(_, prevState) {
      if (prevState.searchText !== this.state.searchText ||
        this.state.page !== prevState.page) {
    try {
      this.setState({isLoading: true});
      const items = await getImages(this.state.searchText, this.state.page)
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
    this.setState({searchText, items: [], isLoading: false, error: false, page: 1});
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
    <Searchbar handleSearch={this.handleSearch}/>
    {error && (<p>Nothing was found</p>)}
    {isLoading ? <Loader/> : <ImageGallery items={items}/>}
    {items.length>=12 && <Button onClick={this.onLoadMore}/>}
    </div>
  );
  }
}


