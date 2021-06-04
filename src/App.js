import { useState } from 'react'
/* importing `{useState}` returns 
a stateful value and 
a function to update it */

import Header from "./components/Header";
/* importing `Header` returns access to
component properties*/

import List from "./components/List"
/* importing `List` returns access to
component properties */

import AddTodo from "./components/AddTodo"
/* importing `AddTodo` returns access to
component properties*/

function App() {
  /* naming and defining scope of function */

/*   defining new datastructure to useState */
  const [todos, setTodos] = useState([
    /* object with initial json values for state 
     */
    {
      id: 1,
      item: "Drink Water",
    },
    {
      id: 2,
      item: "Make Healthy Dinner",
    },
    {
      id: 3,
      item: "Exercise",
    },
  ]);

/* anonymous function  */

  const addTodo = (todo) => {

/* counting the highest number in the id array  */
    const id = Math.ceil(Math.random()*100000)

/*     adding new kv pair to newTodo object */
    const newTodo = {id, ...todo}

/*    calling set todo function */
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Header title="Todo List" />
      {/* updates the state of the Header comp through the addTodo props  */}
      <AddTodo onAdd={addTodo} />
      {/* updates the state of the AddTodo comp through the todos props  */}

      <List todos={todos}/>
      {/* updates the state of the AddTodo component*/}

    </div>
  );
}

export default App;
