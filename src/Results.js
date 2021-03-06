import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results) {
      return (
        <div className="Results">
          <section>
            <h1>{props.results.word}</h1>
            {props.results.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            })}
          </section>
         
          <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
                <div key={index}>
                  <Meanings meaning={meaning} />
                </div>
            );
        })}
        </section>
        </div>
      );
      
} else {
    return null
}
}
