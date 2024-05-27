import GlobalStyle from "../styles/GlobalStyle";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { useState } from "react";
import fakeData from "../assets/fakeData";

const Router = () => {
  const [expenses, setExpenses] = useState(fakeData);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<Home expenses={expenses} setExpenses={setExpenses} />}
            />
          </Route>
          <Route
            path="/detail/:id"
            element={<Detail expenses={expenses} setExpenses={setExpenses} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
