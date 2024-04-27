import classes from "./meal-grid.module.scss";
import {Meal} from "@/types/meal";
import MealItem from "@/components/meals/meal-item";

export default function MealsGrid ({meals}: {meals: Meal[]}) {
	return (
		<ul className={classes.meals}>
			{meals.map(meal => (
				<MealItem key={meal.id} {...meal} />
			))}
		</ul>
	)
}
