import sql from 'better-sqlite3'
import {Meal, MealBody} from "@/types/meal";
import slugify from "slugify";
import xss from "xss";
import * as fs from "node:fs";

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

export async function saveMeal(mealBody: MealBody): Promise<Meal> {
  const slug = slugify(mealBody.title, { lower: true })
  const instructions = xss(mealBody.instructions)
  const extension = mealBody.image.name.split('.').pop()
  // const fileName = `${slug}.${extension}`
  
  // const imageUrl = URL.createObjectURL(mealBody.image)
  
  // save image file to public folder
  // fs.writeFileSync(`public/images/${fileName}`, imageUrl)
  
  const meal: Meal = {
    ...mealBody,
    slug,
    instructions,
    image: '/images/curry.jpg'
  }
  
  
  return new Promise((resolve, reject) => {
    db.prepare(`
      INSERT INTO meals VALUES (
         null,
         @slug,
         @title,
         @image,
         @summary,
         @instructions,
         @creator,
         @creator_email
      )
   `).run(meal);
    const savedMeal = db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
    setTimeout(() => {
      resolve(savedMeal as Meal)
    }, 2000)
  })
}
