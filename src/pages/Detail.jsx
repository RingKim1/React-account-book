import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Ul = styled.ul`
  background-color: rgba(25, 100, 200, 0.4);
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  padding-top: 20px;
`;

const Li = styled.li`
  background-color: transparent;
  text-align: start;

  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Input = styled.input`
  background-color: white;
  text-align: start;
  color: black;
  width: 500px;
  height: 30px;

  margin: 10px 0;
  padding: 5px;
`;

const ButtonWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;

  width: 90%;
  justify-content: space-around;
`;

const Detail = ({ expenses, setExpenses }) => {
  const params = useParams();
  const item = expenses.find((el) => String(el.id) === params.id);

  const navigate = useNavigate();

  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const contentRef = useRef();

  console.log("dateRef", dateRef, dateRef.current);
  console.log("contentRef", contentRef, contentRef.current);

  const removeItem = () => {
    setExpenses((prev) => prev.filter((el) => String(el.id) !== params.id));
    navigate("/");
  };

  const modifyItem = () => {
    setExpenses((prev) =>
      prev.map((el) =>
        String(el.id) === params.id
          ? {
              ...el,
              date: dateRef.current.value || dateRef.current.placeholder,
              category:
                categoryRef.current.value || categoryRef.current.placeholder,
              amount: amountRef.current.value || amountRef.current.placeholder,
              content:
                contentRef.current.value || contentRef.current.placeholder,
            }
          : el
      )
    );
  };

  return (
    <div>
      <Ul>
        <Li>
          날짜
          <Input placeholder={item.date} ref={dateRef}></Input>
        </Li>
        <Li>
          항목
          <Input placeholder={item.category} ref={categoryRef}></Input>
        </Li>
        <Li>
          금액
          <Input placeholder={item.amount} ref={amountRef}></Input>
        </Li>
        <Li>
          내용
          <Input placeholder={item.content} ref={contentRef}></Input>
        </Li>
        <ButtonWrapper>
          <button>
            <Link to={`/`}>Home</Link>
          </button>
          <div>
            <button onClick={modifyItem}>수정</button>
            <button onClick={removeItem}>삭제</button>
          </div>
        </ButtonWrapper>
      </Ul>
    </div>
  );
};

export default Detail;
