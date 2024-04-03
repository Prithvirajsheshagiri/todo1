import React from 'react'

function Todoitem({ todoName,todoDate}) {
  let handlebutton=()=>{

    console.log("hello")
  }
  
  return (
    <div className='container'><div className="row kg-row">
    <div className="col-6 input">
     {todoName}
    </div>
    <div className="col-4">
    {todoDate}
    </div>
    <div className="col-2">
      <button type="button" class="btn btn-danger kg-button " onClick={handlebutton}>
      Delete
      </button>
    </div>
  </div></div>
  )
}

export default Todoitem