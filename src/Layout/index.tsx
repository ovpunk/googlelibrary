import { Books } from "../components/Books";
import { Header } from "./Header";

export const Layout = () => {
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
