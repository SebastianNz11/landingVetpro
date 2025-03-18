import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import {Seccion2} from './components/Seccion2'
export const App = () => {
  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes_somos" element={<Seccion2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
