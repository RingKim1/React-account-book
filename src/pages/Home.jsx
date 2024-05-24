import React, { useState } from "react";
import SelectMonth from "../components/SelectMonth";
import Form from "../components/Form";
import DetailList from "../components/DetailList";

const Home = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 0,
      date: "2024-05-24",
      category: "식비",
      amount: "10000",
      content: "김치찌개",
    },
  ]);
  return (
    <>
      <SelectMonth />
      <Form setExpenses={setExpenses} />
      <DetailList expenses={expenses} setExpenses={setExpenses} />
    </>
  );
};

export default Home;
