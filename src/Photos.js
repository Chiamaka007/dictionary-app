import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div key={index} className="col-4">
                <img src={photo.src.landscape} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
