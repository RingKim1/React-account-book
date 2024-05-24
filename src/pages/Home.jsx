import React, { useEffect, useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState(
    Number(localStorage.getItem("index")) ?? 0
  );

  console.log(Number(localStorage.getItem("index")));
  const isClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("index", activeIndex);
    return () => {};
  }, [activeIndex]);

  // useEffect(() => {
  //   setActiveIndex(Number(localStorage.getItem("index")));
  //   return () => {};
  // }, []);

  return (
    <>
      <SelectMonth activeIndex={activeIndex} isClick={isClick} />
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
