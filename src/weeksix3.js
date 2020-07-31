import React, {Component} from 'react';

class App extends Component {
    state = {
        meal : [
            { type: 'american', item: 'burger', id: 1},
            { type: 'japaneese', item: 'sushi', id: 2},
            { type: 'mexican', item: 'taco', id: 3}
        ]
    }
}
addFood = (food) => {
    food.id = Math.random();
    let meal =[...this.state.meal, food];
    this.setState({
        meal: food
    })
}
render() {
    return (
        <div className="App">
            <h1>Menu</h1>
            <p>Pick Your Poison</p>
            <Meal meal={this.state.meal}/>
            <AddFood addFood={this.addFood}/>

        </div>
    )
}