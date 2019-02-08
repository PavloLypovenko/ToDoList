import React from 'react'
import TodoList from '../todo-list/todo-list'
import StatusFilter from '../status-filter/status-filter'
import AddTaskForm from '../add-task-form/add-task-form'
import './task-board.css'

export default class TaskBoard extends React.Component {
    maxId = 100
    constructor(props){
        super(props)

        this.deleteItem = this.deleteItem.bind(this)
        this.addTask = this.addTask.bind(this)

        this.state = {
            todoData : [
                {
                    label: 'Drink coffe',
                    important: false,
                    id: 1
                },
                {
                    label: 'Make Awesome app',
                    important: true,
                    id: 2
                },
                {
                    label: 'Have a lanch',
                    important: false,
                    id: 3
                }
            ]
        }
    }

    deleteItem(id){
        this.setState( ({ todoData }) => {
            
            const idx = todoData.findIndex( (el) => {
                return el.id === id
            } )

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]

            return {
                todoData: newArray
            }

        } )
    }

    addTask(text){
        
        const task = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState( ({ todoData }) => {
            const newArray = [
                ...todoData,
                task
            ]

            return {
                todoData: newArray
            }
        } )
    }


    render(){

        const { todoData } = this.state
        const { title } = this.props

        return(
            <div className="task-board">
                <div className="title-board">
                    <h3>{title}</h3>
                </div>
                <StatusFilter/>
                <div className="task-list">
                    <TodoList todos={todoData}
                        onDelete={this.deleteItem}/>
                    <AddTaskForm onAddTask={this.addTask}/>
                </div>
            </div>
        )
    }
    
}
