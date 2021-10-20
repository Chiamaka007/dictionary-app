import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    //documentation: https://www.dictionaryapi.dev
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    Search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="m-5 Dictionary">
          <section>

            <form onSubmit={handleSearch}>
              <h1 className="text-center">What word are you looking for?</h1>
              <input type="Search" autoFocus={true} onChange={handleChange} defaultValue={props.defaultKeyword}/>
            </form>
          </section>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "loading...";
  }
}
