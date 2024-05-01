"use server"

import {Meal, MealBody} from "@/types/meal";
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

const isValidText = (text?: string) => {
	return !!text && text.trim()?.length > 1
}

const isNotValidText = (text?: string) => !isValidText(text)

export async function shareMeal (prevState: any, formData: any) {
	const meal: MealBody = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	}
	
	if(isNotValidText(meal.title)) {
		// throw new Error('Invalid input')
		return {
			message: 'Invalid input',
		}
	}
	
	await saveMeal(meal)
	// revalidatePath('/', 'layout') => to revalidate all the pages
	revalidatePath('/meals', 'layout') // in production next create a pregenerated pages and not updated then using cache
	redirect('/meals')
}
