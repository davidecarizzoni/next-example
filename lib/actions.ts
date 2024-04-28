"use server"

import {Meal, MealBody} from "@/types/meal";
import {saveMeal} from "@/lib/meals";

export async function shareMeal (formData: any) {
	const meal: MealBody = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}
	return await saveMeal(meal)
}
