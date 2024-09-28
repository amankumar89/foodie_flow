import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getMealBySlug } from "@/lib/meals";
import classes from "./page.module.css";

type MealProps = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

const MealDetailsPage = ({ params }: { params: { mealSlug: string } }) => {
  const meal: MealProps = getMealBySlug(params.mealSlug) as MealProps;
  if (!meal) {
    return notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
