import React from "react";

const search = (props) => {
  return (
    <div class="hero__container">
      <form
        id="searchform"
        className="searchform"
        onSubmit={props.searchRecipes}
      >
        <input
          required
          className="form-input"
          type="search"
          id="searchbar"
          name="searchbar"
          placeholder="🔍 eg chicken, potato, cauliflower"
        />
        <button id="submitButton" type="submit">
          SEARCH
        </button>
      </form>
      <p className="hero__slogan">bon appetit!</p>
    </div>
  );
};

export default search;
