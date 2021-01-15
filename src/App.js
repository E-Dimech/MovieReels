import React from "react";
import SearchResults from "./components/SearchResults/SearchResults";
import Nominations from "./components/Nominations/Nominations";
import "./App.scss";
import axios from "axios";

class App extends React.Component {
  state = {
    results: [],
    query: "",
    nominations: [],
    newItem: "",
  };

  handleOnChange = (e) => {
    e.preventDefault();
    const query = e.target.value;
    this.setState({ query });
    // document.getElementById("search").value = "";
    console.log(query);
  };

  handleSearch = (e) => {
    e.preventDefault();
    const urlApi = `http://www.omdbapi.com/?s=${this.state.query}&apikey=926dcd91&type=movie`;
    // document.getElementById("search").reset();

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

  nominate = (nomination) => {
    // e.preventDefault();
    const { nominations } = this.state;

    // if (
    //   !nominations.some(
    //     (alreadyNominated) => alreadyNominated.id == nomination.id
    //   )
    // ) {
    this.setState({
      nominations: [...this.state.nominations, nomination],
    });
    console.log(nomination);
    console.log(nominations);
    // }
  };

  // nominate = () => {
  //   const newItem = {
  //     id: 1 + Math.random(),
  //     value: this.state.newItem,
  //   };
  //   const nominations = [...this.state.nominations];
  //   nominations.push(newItem);

  //   this.setState({
  //     nominations,
  //     newItem: "",
  //   });
  //   console.log(nominations);
  // };

  removeNomination = (id) => {
    console.log(id);
    // const nominations = [...this.state.nominations];

    // const updatedNominations = nominations.filter((movie) => movie.id !== id);

    // this.setState({ nominations: updatedNominations });
  };

  // nominate = (e) => {
  //   e.preventDefault();
  //   const nominations = this.state;
  //   const addNominee = this.state.results;
  //   console.log(nominations);

  //   this.setState({
  //     nominations: [...this.state.nominations, addNominee],
  //   });
  // };

  render() {
    return (
      <div className="search">
        <div className="search__form-wrap">
          <h1 className="search__title">Shoppies</h1>
          <form
            className="search__form"
            id="search"
            onSubmit={(e) => this.handleSearch(e)}
          >
            {/* <label className="search__label">Movie Title</label> */}
            <input
              className="search__input"
              name="text"
              type="text"
              // id="search"
              onChange={(e) => this.handleOnChange(e)}
              value={this.state.query}
              placeholder="Movie Title"
            />
            <i class="search__input-icon fas fa-search"></i>
          </form>
        </div>
        <div className="search__render-wrap">
          {this.state.results.length > 0 && (
            <div className="search__results">
              <h2 className="search__results-title">
                Results for {this.state.query}
              </h2>

              {this.state.results &&
                this.state.results.map((movie) => {
                  return (
                    <SearchResults
                      key={movie.imdbID}
                      title={movie.Title}
                      year={movie.Year}
                      searchResults={this.state.query}
                      onClick={this.nominate}
                    />
                  );
                })}
            </div>
          )}

          {this.state.nominations.length > 0 && (
            <div className="search__nominations">
              <h2 className="search__nominations-title">Nominations</h2>

              {this.state.results &&
                this.state.nominations.map((addNominee) => {
                  return (
                    <Nominations
                      key={addNominee.imdbID}
                      title={addNominee.title}
                      year={addNominee.year}
                      onClick={this.removeNomination}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
