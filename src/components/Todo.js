/* defining properties hook of 
Function Todo
 */const Todo = ({ todo }) => {
    return (
/*         returning item property of Todo object 
            enclosed in a div                
            wrapped in an <h2> tag</h2>
            .item accesses the properties of
            todo hook 
            */
        <div>
            <h2>{todo.item}</h2>
        </div>
    )
}
/* returns the item property of todo function object
 */
export default Todo

