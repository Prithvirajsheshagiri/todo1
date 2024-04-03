import React from 'react'
import Todoitem from './Todoitem1'


function Todoitems({todoItems}) {
  return (
    <div>
         {todoItems.map(item=>(
            
          <Todoitem  todoName={item.todoName} todoDate={item.todoDate} />
         ))}
      
        
    </div>
  )
}

export default Todoitems