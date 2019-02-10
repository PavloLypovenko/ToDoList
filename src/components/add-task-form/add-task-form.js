import React from 'react'

export default class AddTaskForm extends React.Component{
    constructor(props){
        super(props)

        this.onChange = this.onChange.bind(this)
        this.handlerClick = this.handlerClick.bind(this)

        this.state = {
            text: ''
        }
    }

    handlerClick(){
        this.props.onAddTask( this.state.text )
        this.setState( () => {
            return{
                text: '' 
            }
        } )
    }

    onChange(e){
        const { value } = e.currentTarget
        this.setState({
            text: [value]
        })
    }


    render(){
        
        const { text } = this.state
        return(
            <div className="input-group mb-4">
                <input type="text" className="form-control" 
                    placeholder="Write your new task" 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    value={text}
                    onChange={this.onChange}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary"
                        type="button" 
                        id="button-addon2"
                        onClick={ this.handlerClick }>
                            Add
                    </button>
                </div>
            </div>
        )
    }
}