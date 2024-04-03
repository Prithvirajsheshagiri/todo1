import React from 'react'
let todoName=" i am hugry";
let todoDate="   1/02/2023"
function Todoitem2() {
  return (
    <div className='container'>
        <div className="row kg-row">
    <div className="col-6 input">
     {todoName}
    </div>
    <div className="col-4">
  { todoDate}
    </div>
    <div className="col-2">
      <button type="button" class="btn btn-danger kg-button">
      Delete
      </button>
    </div>
  </div></div>
  )
}

export default Todoitem2