import React from "react";
import { useState } from "react";

function AddTodo({ onNewIteam }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleNamechange = (event) => {
    setName(event.target.value);
  };
  const handleDatechange = (event) => {
    setDate(event.target.value);
  };
  const handleClick = () => {
    onNewIteam(name, date);
    setDate("");
    setName("");
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6 input">
          <input
            type="text"
            placeholder="ener name "
            value={name}
            className="name"
            onChange={handleNamechange}
          />
        </div>
        <div className="col-4">
          <input type="date"
          value={date} onChange={handleDatechange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
