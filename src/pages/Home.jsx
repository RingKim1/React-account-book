import React, { useState } from "react";
import SelectMonth from "../components/SelectMonth";
import Form from "../components/Form";
import DetailList from "../components/DetailList";

const Home = ({ setExpenses, expenses }) => {
  const [activeIndex, setActiveIndex] = useState(
    Number(localStorage.getItem("index")) ?? 0
  );

  return (
    <>
      <SelectMonth activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Form setExpenses={setExpenses} />
      <DetailList
        expenses={expenses}
        setExpenses={setExpenses}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default Home;
