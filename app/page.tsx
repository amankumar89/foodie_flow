import React, { FC } from "react";

type HomeProps = {};

const Home: FC<HomeProps> = () => {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
};

export default Home;
