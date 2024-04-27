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
