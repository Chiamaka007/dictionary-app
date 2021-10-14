import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(" ");

  function Search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
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
