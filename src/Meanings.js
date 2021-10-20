import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css"

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h2 className="speech">{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <strong>Definition</strong>
            <div className="definition">{definitions.definition}</div>
            <br />
            <strong>Example</strong>
            <em>
              <div className="example">{definitions.example}</div>
            </em>
            <Synonyms synonyms={definitions.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
