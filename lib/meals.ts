import sql from 'better-sqlite3'
import {Meal} from "@/types/meal";

const db = sql('meals.db')

export function getMeals(): Promise<Meal[]> {
  return new Promise((resolve, reject) => {
    const meals= db.prepare('SELECT * FROM meals').all()
    setTimeout(() => {
      resolve(meals as Meal[])
    }, 2000)
  })
}

export function getMeal(slug: string): Promise<Meal> {
  return new Promise((resolve, reject) => {
    const meal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
    console.debug(meal)
    if (!meal) {
      reject('Meal not found')
    }
    setTimeout(() => {
      resolve(meal as Meal)
    }, 2000)
  })
}
