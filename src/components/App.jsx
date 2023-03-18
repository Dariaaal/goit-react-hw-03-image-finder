import React, { Component } from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";


export default class App extends Component {

  state = {
    searchText: '',
  }

  handleSearch = (searchText) => {
    this.setState({searchText});
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
    </div>
  );
  }
}

