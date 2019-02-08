import React from 'react'
import './status-filter.css'
export default class StatusFilter extends React.Component{


    render(){
        return(
            <div className="btn-group status-filter">
                <button type="button" className="btn btn-info">All</button>
                <button type="button" className="btn btn-outline-secondary">Active</button>
                <button type="button" className="btn btn-outline-secondary">Done</button>
            </div>
        )
    }
}