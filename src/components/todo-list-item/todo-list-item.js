import React from 'react'
import './todo-list-item.css'
 
export default class TodoListItem extends React.Component {

    constructor(props){
        super(props) 

        this.state = {
        }
    }

    render(){
        const { label, onDelete, onDone, onImportant,
            done , important} = this.props

        let classNames = 'todo-list-item'

        if(done){
            classNames += ' done'
        }

        if( important ) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>

                <div className="input-group row">
                    <div className="col-8">
                        <span 
                            className="todo-list-item-label"
                            onClick={ onDone }>
                            {label}
                        </span>
                    </div>
                    
                    <div className="col-2">
                        <button type="button" 
                            className="btn btn-outline-success btn-sm"
                            onClick={ onImportant }>
                                <i className="fa fa-exclamation"/>    
                        </button>
                    </div>
                    <div className="col-2">
                        <button type="button" 
                            className="btn btn-outline-danger btn-sm"
                            onClick={ onDelete }>
                            <i className="fa fa-trash-o"/>    
                        </button>
                    </div>
                </div>
            </span>
        )

    }
}
