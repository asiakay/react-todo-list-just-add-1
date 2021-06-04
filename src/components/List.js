/* importing `Todo` returns 
component property `item` */
import Todo from './Todo'
/* anonymous function 
returns id key, value property
.map pairs the key/values in an array

 */const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

