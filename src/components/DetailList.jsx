import styled from "styled-components";
import DetailItem from "./DetailItem";

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

const DetailList = ({ expenses, setExpenses, activeIndex }) => {
  return (
    <section>
      <Ul>
        {expenses
          // 해당 월에 해당하는 것만 걸러주는 필터
          .filter(
            (expense) =>
              Number(expense.date[5] + expense.date[6]) === activeIndex + 1
          )
          .map((expense) => (
            <DetailItem
              key={expense.id}
              expense={expense}
              setExpenses={setExpenses}
            />
          ))}
      </Ul>
    </section>
  );
};

export default DetailList;
