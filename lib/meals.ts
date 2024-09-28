import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("error in fetching the meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMealBySlug(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
