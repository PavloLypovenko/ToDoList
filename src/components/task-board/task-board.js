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
        this.createTask = this.createTask.bind(this)
        this.onDone = this.onDone.bind(this)
        this.onImportant = this.onImportant.bind(this)
        this.toggleProp = this.toggleProp.bind(this)
        this.filter = this.filter.bind(this)
        this.onFilterChange = this.onFilterChange.bind(this)

        

        this.state = {
            todoData: this.props.todoData,
            filter: 'all'
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

    createTask(text){
        return{
            label: text,
            important: false,
            id: this.maxId++,
            done: false
        }
    }

    addTask(text){
        
        const task = this.createTask(text)

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

    toggleProp(arr, id, propName){
        const idx = arr.findIndex( (el) => {
            return el.id === id
        } )

        const oldItem = arr[idx]
        const newitem = { ...oldItem, [propName]: !oldItem[propName] }

        return [
            ...arr.slice(0, idx),
            newitem,
            ...arr.slice(idx + 1)
        ]

    }

    onDone( id ){
        this.setState( ({ todoData }) => {
            return{
                todoData: this.toggleProp(todoData, id, 'done')
            }
        } )
        console.log("OnDone", id)
    }

    onImportant( id ){
        this.setState( ({ todoData }) => {
            return{
                todoData: this.toggleProp(todoData, id, 'important')
            }
        } )
        console.log("OnImportant", id)
    }

    filter( items, filter ){
        switch (filter) {
            case 'all':
                return items
                

            case 'active':
                return items.filter( ( item ) => !item.done )
                

            case 'done':
                return items.filter( ( item ) => item.done )
                
        
            default:
                return items
        }
    }

    onFilterChange(filter){
        this.setState({ filter  })
    }

    render(){

        const { todoData, filter } = this.state
        const { title } = this.props
        const doneCount = todoData
                            .filter( ( el ) => el.done).length 
        const todoCount = todoData.length - doneCount
        const visibleItems = this.filter(todoData, filter )

        return(
            <div className="task-board">
               
                <div className="title-board">
                    <h3>{title}</h3>
                </div>
                
                <div className="title-board">
                    <span>{`Todo ${todoCount}, Done ${doneCount}`}</span>
                </div>

                <StatusFilter  filter = { filter }
                    onFilterChange = { this.onFilterChange }/>

                <div className="task-list">

                    <TodoList todos={visibleItems}
                        onDelete={this.deleteItem}
                        onDone={this.onDone}
                        onImportant={this.onImportant}/>

                    <AddTaskForm onAddTask={this.addTask}/>

                </div>

            </div>
        )
    }
    
}
