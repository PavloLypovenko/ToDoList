import React, { Component } from 'react'
import TaskBoard from './task-board/task-board'
import AppHeader from './app-header/app-header'
import './app.css'

export default class App extends Component {

    constructor(props){
        super(props)

        this.handlerClick = this.handlerClick.bind(this)
        this.handlerTitleChange = this.handlerTitleChange.bind(this)

        this.count = 1
        this.state = {
            title: '',
            idBoards: [
                {
                    id: 0,
                    titleBoard: 'One',
                    todoData : []
                }
            ]
        }

    }

    handlerClick(){
        const boards = {
            id: this.count++,
            titleBoard: this.state.title,
            todoData: []
        }

        this.setState( ( { idBoards } ) => {
            const newArray = [
                ...idBoards,
                boards
            ]

            return{
                idBoards: newArray,
                title: ''
            }
        })

    }

    handlerTitleChange(e){
        const { value } = e.currentTarget

        this.setState( {
            title: [value]
        })

    }


    render() {
    
        const { idBoards, title } = this.state

        const boards = idBoards.map(( item ) => {
            return(
                <div className="col-4">
                    <TaskBoard title={item.titleBoard}
                        todoData={item.todoData}/>
                </div>
            )
        })
        return (
          <div className="container">
            <div className="app-header">
                <AppHeader/>
            </div>
            <div className="row content">
                
                { boards }

                <div className="col-4">
                    <div className="input-group create-board">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Please write name of boards" 
                            aria-label="Recipient's username" aria-describedby="button-addon2"
                            value={title}
                            onChange={this.handlerTitleChange}/>

                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" 
                                type="button" 
                                id="button-addon2"
                                onClick={this.handlerClick}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}