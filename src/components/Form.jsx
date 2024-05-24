import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import FormContent from "./FormContent";

const StForm = styled.form`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

const Form = ({ setExpenses }) => {
  // 상태 값 관리
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);
  const [content, setContent] = useState("");

  // 컴포넌트 분리를 위해 생성
  const FormContents = [
    {
      name: "날짜",
      value: date,
      setValue: setDate,
      type: "date",
    },
    {
      name: "항목",
      value: category,
      setValue: setCategory,
      type: "text",
    },
    {
      name: "금액",
      value: amount,
      setValue: setAmount,
      type: "number",
    },
    {
      name: "내용",
      value: content,
      setValue: setContent,
      type: "text",
    },
  ];

  const addExpense = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      date,
      category,
      amount,
      content,
    };

    setExpenses((prev) => [...prev, newExpense]);
  };
  return (
    <StForm onSubmit={addExpense}>
      {FormContents.map((el) => (
        <FormContent
          key={el.name}
          FormContent={el.name}
          value={el.value}
          setValue={el.setValue}
          type={el.type}
        />
      ))}
      <button type="submit">저장</button>
    </StForm>
  );
};

export default Form;
