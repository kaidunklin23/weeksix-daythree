import React, {Component} from 'react';
import Meals from './Meal';
import AddMeal from'./addMeal';
class App extends Component {
    state = {
        meals : [
            { type: 'american', cost:4,item: 'burger', id: 1},
            { type: 'japaneese',  cost:10, item: 'sushi', id: 2},
            { type: 'mexican',  cost:3, item: 'taco', id: 3}
        ]
    }

ddMeal = (food) => {
    meals.id = Math.random();
    let meals =[...this.state.meals, food];
    this.setState({
        meals: meals
    })
}
deleteMeal = (id) => {
let meals = this.state.meals.filter(meal => {
    return meal.id !== id
});
this.setState({
    meals: meals
})
}
componentDidMount(){
    console.log('component mounted');
}
componentDidUpdate(prevProps, prevState){
console.log('component updated');
console.log(prevProps, prevState);
}
render() {
    return (
        <div className="App">
            <h1>Menu</h1>
            <p>Pick Your Poison</p>
            <Meals deleteMeal={this.deleteMeal} 
            meals={this.state.meals}/>
            <AddMeal addMeal={this.addMeal}/>

        </div>
    )
}}
export default App