import React from 'react';
import './Meal.css'
const Meal= ({meal, deleteFood}) => {
    const mealList = meals.map(food => {
        if (food.cost > 3){
            return(
                <div className="meal" key={food.id}>
                    <div>Type: {meal.type}</div>
                    <div>Cost: {meal.cost}</div>
                    <div>Item: {meal.item}</div>
                    <button onClick={() => {deleteFood(meal.id)}}>Delete meal</button>
                </div>
            )
        }else {
            return null
        }
    })

    return(
        <div className="mealList">
            {mealList}
        </div>
    )
}

export default Meal
