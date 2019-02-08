import React from 'react'
import './todo-list-item.css'
 
export default class TodoListItem extends React.Component {

    constructor(props){
        super(props)

        this.handlerClick = this.handlerClick.bind(this)
        this.handlerClickImportant = this.handlerClickImportant.bind(this)

        this.state = {
            done: false,
            important: false
        }
    }

    handlerClick(){
        this.setState( ( { done } ) => {
            return{
                done: !done
            }
        })
    }

    handlerClickImportant(){
        this.setState( ( { important } ) => {
            return{
                important: !important
            }
        } )
    }

    render(){
        const { done , important } = this.state
        const { label} = this.props

        let classNames = 'todo-list-item'

        if(done){
            classNames += ' done'
        }

        if( important ) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                <span 
                    className="todo-list-item-label"
                    onClick={this.handlerClick}>
                    {label}
                </span>
                
                <button type="button" 
                    className="btn btn-outline-success btn-sm"
                    onClick={this.handlerClickImportant}>
                        <i className="fa fa-exclamation"/>    
                </button>
    
                <button type="button" 
                    className="btn btn-outline-danger btn-sm">
                    <i className="fa fa-trash-o"/>    
                </button>
            </span>
        )

    }
}
