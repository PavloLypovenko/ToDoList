import React from 'react'
import ReactDOM from 'react-dom'
import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import Search from './components/search'
import ItemStatusFilter from './components/item-status-filter'

const App = () => {

    const todoData = [
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

    return(
        <div>
            <AppHeader/>
            <Search/>
            <ItemStatusFilter/>
            <TodoList todos={todoData}/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)