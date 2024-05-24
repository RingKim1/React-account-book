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
  // activeIndex의 상태가 바뀌면 해당 값을 로컬 스토리지에 저장 후
  // 클릭된 상태를 유지하기 위해
  useEffect(() => {
    localStorage.setItem("index", activeIndex);
    return () => {};
  }, [activeIndex]);

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
