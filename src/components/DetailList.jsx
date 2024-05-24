import styled from "styled-components";
import DetailItem from "./DetailItem";

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;
`;

const DetailList = ({ expenses, setExpenses }) => {
  return (
    <section>
      <Ul>
        {expenses.map((expense) => (
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
