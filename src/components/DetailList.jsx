import styled from "styled-components";
import DetailItem from "./DetailItem";
import NoItem from "./NoItem";

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
        {/* NoItem 컴포넌트 출력 문제 */}
        {expenses
          // 해당 월에 해당하는 것만 걸러주는 필터
          .filter(
            (expense) =>
              Number(expense.date[5] + expense.date[6]) === activeIndex + 1
          )
          .map((expense) => (
            <DetailItem key={expense.id} expense={expense} />
          )) || <NoItem />}
      </Ul>
    </section>
  );
};

export default DetailList;
