import axios from "axios"
import React from "react"



function TodoItem(props) {
    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:8000/api/todo/${title}`)
            .then(res => console.log(res.data))}

        return (
            <div >
                <p>
                    <span style={{ fontWeight: 'bold'}}>Task: </span>
                    {props.todo.title}
                </p>
                <p>
                    <span style={{ fontWeight: 'bold'}}>Descipition: </span>
                    {props.todo.description}
                </p>
                <p>
                    <button onClick={() => deleteTodoHandler(props.todo.title)} className="btn btn-outline-danger my-2 mx-2" style={{'borderRadius':'10px',}}>Delete</button>
                    <hr></hr>
                </p>
            </div>
        )
}

export default TodoItem;