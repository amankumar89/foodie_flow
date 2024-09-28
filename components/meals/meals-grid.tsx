import React, { FC } from "react";
import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

type MealItemProps = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
};

type MealsGridProps = {
  meals: MealItemProps[];
};

const MealsGrid: FC<MealsGridProps> = ({ meals }) => {
  return (
    <ul className={classes.meals}>
      {meals?.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
