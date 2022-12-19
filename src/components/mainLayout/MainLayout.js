import React from "react";
import { Fotter } from "./Fotter.js";
import { Header } from "./Header.js";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Fotter />
    </div>
  );
};
