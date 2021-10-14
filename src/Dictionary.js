import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    
    //documentation: https://www.dictionaryapi.dev 
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="container">
      <div className="mt-5 Dictionary">
        <form onSubmit={Search}>
          <input type="Search" autoFocus={true} onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}
