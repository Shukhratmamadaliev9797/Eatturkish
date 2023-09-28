import React from "react";

export default function Delete(props) {
  return (
    <div className="delete">
      <div className="delete__container" data-aos="fade-down">
        <div className="delete__container-header">
          <h1>{props.heading}</h1>
        </div>

        <div className="delete__container-body">
          <p>{props.body}</p>
        </div>

        <div className="delete__container-footer">
          <div>
            <button onClick={props.closeModal}>Cancel</button>
            <button onClick={props.deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
