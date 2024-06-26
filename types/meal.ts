export interface Meal {
	id?: string
	title: string
	slug: string
	image: string
	summary: string
	creator: string
	creator_email: string
	instructions: string
}


export interface MealBody {
	title:  string
	summary: string
	instructions: string
	image: File
	creator: string
	creator_email: string
}
