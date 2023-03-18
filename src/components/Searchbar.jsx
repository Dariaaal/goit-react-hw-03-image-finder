import React from "react";
import css from './Searchbar.module.css'

const Searchbar = (onSubmit) => (
    <header className={css.searchbar}>
  <form className={css.searchform}>
    <button type="submit" className={css.button} onClick={() => onSubmit}>
      <span className={css.label}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)

export default Searchbar;