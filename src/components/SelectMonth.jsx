import styled from "styled-components";
import MonthBtn from "./MonthBtn";

const Section = styled.section`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;
`;

const SelectMonth = ({ activeIndex, isClick }) => {
  const Month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Section>
      {Month.map((el, index) => (
        <MonthBtn
          key={el}
          Month={el}
          active={activeIndex === index}
          onClick={() => isClick(index)}
        />
      ))}
    </Section>
  );
};

export default SelectMonth;
