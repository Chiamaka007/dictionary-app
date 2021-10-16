import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>{definitions.definition}</p>
            <br />

            <em>
              <p>{definitions.example}</p>
            </em>
          </div>
        );
      })}
    </div>
  );
}
