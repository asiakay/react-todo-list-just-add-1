import { useState } from 'react'

const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onAdd({item})

        setItem('')
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Add Todo:</label>
           
{/*            Input field for AddTodo object todo wrapped in a div */}
           <div>
                <input 
                    type="text" 
                    placeholder="Todo Item"
                    value={item}
                    /* setitem() acts as anon function and 
                    lifts the e.target.value param's value 
                    up to the current state accross the the app */
                    onChange={ (e) => setItem(e.target.value)}
                /> 
            </div>

{/* button section, 
    adding sem ui, 
        changing `<input type="submit">` to `<button type="submit">`
        New Element <button> must include 

            `type="submit"`, 
            `value="Add Todo"` 
            `class="ui button"`
            `AddTodo` to access the props of the `Add Todo` object */}
            <div>
            <button type="submit" value="Add Todo" class="ui button">add must do</button>
        </div>
        </form>
    )
}

export default AddTodo
