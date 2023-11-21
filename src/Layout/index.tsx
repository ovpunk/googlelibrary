import { FC } from "react";
import { Books } from "../components/Books";
import { Header } from "./Header";

export const Layout: FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="container">
          <Books />
        </div>
      </main>
    </div>
  );
};
