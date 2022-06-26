import React from "react";

const search = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default search;