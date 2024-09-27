import React, { FC } from "react";
import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

type MainHeaderProps = {};

const MainHeader: FC<MainHeaderProps> = ({}) => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="A plate with food in it" />
        Foodie Flow
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
