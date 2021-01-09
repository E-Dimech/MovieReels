import React from "react";
import "./results.scss";

function Results(props) {
  return (
    <>
      {/* <div>
        <p>Results for {props.searchResults}</p>
      </div> */}
      <div>
        <p>{props.title}</p>
        <p>{props.year}</p>
      </div>
    </>
  );
}

export default Results;
