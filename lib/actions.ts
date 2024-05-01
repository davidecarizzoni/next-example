"use server"

import {Meal, MealBody} from "@/types/meal";
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export async function shareMeal (formData: any) {
	const meal: MealBody = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}
	await saveMeal(meal)
	redirect('/meals')
}
