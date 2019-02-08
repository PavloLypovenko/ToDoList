import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item'
import './todo-list.css'

const TodoList = ({ todos, onDelete }) => {

    const elements = todos.map( (item) => {

        const { id, ...itemProps} = item

        return(
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps}
                onDelete={() => onDelete(id)}/>
            </li>
        )
    })

    return(
        <div>
            <ul className="list-group todo-list">
                {elements}
            </ul>
        </div>
    )
}

export default TodoList