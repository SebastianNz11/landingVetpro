import { Seccion1 } from "./Seccion1";
import { Seccion2 } from "./Seccion2";
import { Section3 } from "./Section3";
import { Seccion4 } from "./Seccion4";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <Seccion1 />
      <Seccion2 />
      <Section3 />
      <Seccion4 />
      <Footer />
    </div>
  );
};
