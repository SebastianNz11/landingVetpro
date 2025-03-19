import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
export const App = () => {
  return (
    <div className="m-0 p-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
