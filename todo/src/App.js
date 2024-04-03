import React, { useState } from "react";
import "./App.css";
import AddTodo from "./container/AddTodo";
import Heading from "./container/Heading";
import Todoitem from "./container/Todoitem";
import Todoitem1 from "./container/Todoitem1";
import Todoitem2 from "./container/Todoitem2";

function App() {
  let initialtodoItems = [
    {
      todoName: "I am hungry",
      todoDate: "31/02/1991",
    },
    {
      todoName: "I am not going to school",
      todoDate: "25/05/1996",
    },
  ];

  const [todoitems, setTodoitems] = useState(initialtodoItems);

  const handleNewItem = (todoName, todoDate) => {
    console.log(`New Item Added:${todoName} date:${todoDate}`);
    let newtodoitems = [
      ...todoName,
      { todoName: todoName, todoDate: todoDate },
    ];

    setTodoitems(newtodoitems );
  };
  return (
    <center>
      <Heading />

      <AddTodo onNewIteam={handleNewItem} />
      <div className="todo-container">
        <Todoitem todoItems={todoitems} />
      </div>
    </center>
  );
}

export default App;
