import React from "react";
import "./searchResults.scss";

function SearchResults(props) {
  console.log(props);
  return (
    <>
      <div className="results">
        <ul>
          <li className="results__movie-list" key={props.id}>
            <span className="results__movie-title">{props.title}</span>
            <span>{"   "}</span>
            <span className="results__movie-year"> {props.year} </span>
            <button
              className="results__nom-btn"
              onClick={() => props.onClick(props)}
            >
              <i className="results__nom-icon fas fa-award"></i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SearchResults;
