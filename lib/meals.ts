import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("error in fetching the meals");
  return db.prepare("SELECT * FROM meals").all();
}
