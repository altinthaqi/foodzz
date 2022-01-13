import React from "react";
import { MealsContainer } from "./AvailableMealsStyled";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { DUMMY_MEALS } from "../../data/data";

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <MealsContainer>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </MealsContainer>
  );
}

export default AvailableMeals;
