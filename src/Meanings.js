import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <strong>Definition</strong>
            <p>{definitions.definition}</p>
            <br />
            <strong>Example</strong>
            <em>
              <p>{definitions.example}</p>
            </em>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
