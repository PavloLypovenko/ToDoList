import React from 'react'

export default class AddTaskForm extends React.Component{
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)

        this.state = {
            text: ''
        }
    }

    onChange(e){
        const { value } = e.currentTarget
        this.setState({
            text: [value]
        })
    }


    render(){
        const { onAddTask } = this.props
        const { text } = this.state
        return(
            <div className="input-group mb-4">
                <input type="text" className="form-control" 
                    placeholder="Write your new task" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    onChange={this.onChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                        type="button" 
                        id="button-addon2"
                        onClick={ () => { onAddTask( text ) } }>
                            Add
                    </button>
                </div>
            </div>
        )
    }
}