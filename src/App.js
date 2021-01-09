// import logo from "./logo.svg";
import React from "react";
import Results from "./components/Results/Results";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    results: [],
    query: "",
    // nominations: [],
  };

  handleOnChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
    console.log(query);
  };

  handleSearch = (e) => {
    e.preventDefault();
    const urlApi = `http://www.omdbapi.com/?s=${this.state.query}&apikey=926dcd91`;

    axios
      .get(urlApi)
      .then((res) => {
        this.setState({ results: res.data.Search });
        console.log(res.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1>The Shoppies</h1>
        <form onSubmit={(e) => this.handleSearch(e)}>
          <label>Movie Title</label>
          <input
            className="search"
            name="text"
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            value={this.state.query}
            placeholder="Search"
          />
        </form>
        <div>
          {/* if (this.state.results) {<p>Results for {this.state.query}</p>} */}
          {this.state.results &&
            this.state.results.map((movie) => {
              return (
                <Results
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  searchResults={this.state.query}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default App;
