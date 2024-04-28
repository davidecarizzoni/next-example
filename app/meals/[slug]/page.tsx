import classes from "./page.module.scss";
import Image from "next/image";
import {getMeal} from "@/lib/meals";
import {notFound} from "next/navigation";

type Props = {
	params: {
		slug: string;
	}
}

export default async function MealsDetailPage({ params : { slug }}: Props) {
	const meal = await getMeal(slug)
	console.log(meal)
	
	if(!meal) {
		notFound()
	}
	
	meal.instructions = meal.instructions.replace('/\n/', '<br/>')
	
	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image fill src={meal.image} alt={meal.title} />
				</div>
				<div className={classes.headerText}>
					<h1>
						{meal.title}
					</h1>
					<p className={classes.creator}>
						Created by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
					</p>
					<p className={classes.summary}>
						Summary
					</p>
				</div>
			</header>
			<main>
				<p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}/>
			</main>
		</>
	);
}
