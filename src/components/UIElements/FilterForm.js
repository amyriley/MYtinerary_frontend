import React, { Component } from 'react';

class filterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityFilter: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
        this.props.onChange(e.target.value)
        console.log(this.state.cityFilter)
    }

    render() {
        return (
            <div>
                <label htmlFor="filter">Filter our current cities: </label>
                <input type="text" id="filter" 
                value={this.state.cityFilter} 
                onChange={this.handleChange}/>
            </div>
        )
    }
}

export default filterForm;