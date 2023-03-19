import React, { Component } from "react";
import css from './Searchbar.module.css'

export default class Searchbar extends Component {
  state = {
    value: '',
  }

  handleChange = e => {
    this.setState({value: e.target.value.toLowerCase()});
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSearch(this.state.value)
  }

    render() {
      return (
        <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.label}>Search</span>
          </button>
      
          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </form>
      </header>
      )
    }
  }
  
