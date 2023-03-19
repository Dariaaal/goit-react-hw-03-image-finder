import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import {Button} from './button/Button'

export default class App extends Component {

  state = {
    searchText: '',
    page: 1
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
      return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Searchbar handleSearch={this.handleSearch}/>
    <ImageGallery searchText={this.state.searchText}/>
    <Button/>
    </div>
  );
  }
}

