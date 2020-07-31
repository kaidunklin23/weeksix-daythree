import React, { Component } from 'react';
class AddMeal extends Component{
    state = {
        type: null,
        cost: null,
        item: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // 4. add in the function that we have passed as props
        this.props.addMeal(this.state)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="type">type</label>
                    <input type="text" id="type" onChange={this.handleChange} />
                    <label htmlFor="cost">cost</label>
                    <input type="text" id="cost" onChange={this.handleChange} />
                    <label htmlFor="item">item</label>
                    <input type="text" id="item" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddMeal



