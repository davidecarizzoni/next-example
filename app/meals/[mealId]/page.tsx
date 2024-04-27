type Props = {
	params: {
		mealId: string;
	}
}

export default function MealsDetailPage({ params : { mealId }}: Props) {
	return (
		<main>
			<h1 style={{ color: 'white', textAlign: 'center' }}>
				Meals MealId - Time to get started! { mealId }
			</h1>
		</main>
	);
}
