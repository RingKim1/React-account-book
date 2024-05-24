import styled from "styled-components";

const Li = styled.li`
  background-color: rgba(25, 100, 200, 0.4);
  border: 1px solid gray;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  align-items: start;

  width: 80%;
  margin: 10px;
  padding: 10px;
`;

const DivDate = styled.div`
  background-color: transparent;

  justify-content: start;
  align-items: start;
`;
const DivContent = styled.div`
  background-color: transparent;
  width: 100%;
  margin: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const P = styled.p`
  background-color: transparent;
  margin: 5px;
`;

const DetailItem = ({ expense, setExpenses }) => {
  return (
    <Li>
      <DivDate>{expense.date}</DivDate>
      <DivContent>
        <P>
          {expense.category} - {expense.content}
        </P>
        <P>{expense.amount}원</P>
      </DivContent>
    </Li>
  );
};

export default DetailItem;
