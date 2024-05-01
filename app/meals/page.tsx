import classes from "./page.module.scss";
import MealsGrid from "@/components/meals-grid/meals-grid";
import Link from "next/link";
import {getMeals} from "@/lib/meals";
import {Suspense} from "react";
import Loader from "@/components/loader/loader";

export const metadata = {
	title: 'Meals',
	description: 'Choose your favorite meal and enjoy it'
}

async function Meals () {
	const meals = await getMeals()
	return <MealsGrid meals={meals}/>
}

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious meals, created <span className={classes.highlight}> by you </span>
				</h1>
				<p>
					Choose your favorite meal and enjoy it
				</p>
				<p className={classes.cta}>
					<Link href={'/meals/share'}>
						Share your favorite receipe
					</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<Loader text={'Loading meals'} />}>
					<Meals/>
				</Suspense>
			</main>
		</>
	);
}
