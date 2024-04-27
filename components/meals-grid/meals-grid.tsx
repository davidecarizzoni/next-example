import classes from "./meals-grid.module.scss";
import {Meal} from "@/types/meal";
import MealItem from "@/components/meal-item/meal-item";

export default function MealsGrid ({meals}: {meals: Meal[]}) {
	return (
		<ul className={classes.meals}>
			{meals.map(meal => (
				<li key={meal.id}>
					<MealItem {...meal} />
				</li>
			))}
		</ul>
	)
}
