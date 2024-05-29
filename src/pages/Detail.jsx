import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { modifyItem, removeItem } from "../redux/slices/expensesSlice";

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

const Input2 = styled.input`
  background-color: white;
  text-align: start;
  color: black;
  width: 500px;
  height: 100px;

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

const Detail = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const params = useParams();

  const item = expenses.find((el) => String(el.id) === params.id);
  const navigate = useNavigate();

  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const contentRef = useRef();

  const payload = {
    id: params.id,
    dateRef: dateRef,
    categoryRef: categoryRef,
    amountRef: amountRef,
    contentRef: contentRef,
  };

  const removeItemBtn = (id) => {
    dispatch(removeItem(id));
    navigate("/");
  };

  const modifyItemBtn = (payload) => {
    dispatch(modifyItem(payload));
  };

  return (
    <>
      <Ul>
        <Li>
          날짜
          <Input defaultValue={item.date} ref={dateRef}></Input>
        </Li>
        <Li>
          항목
          <Input defaultValue={item.category} ref={categoryRef}></Input>
        </Li>
        <Li>
          금액
          <Input defaultValue={item.amount} ref={amountRef}></Input>
        </Li>
        <Li>
          내용
          <Input2 defaultValue={item.content} ref={contentRef}></Input2>
        </Li>
        <ButtonWrapper>
          <button>
            <Link to={`/`}>Home</Link>
          </button>
          <div>
            <button onClick={() => modifyItemBtn(payload)}>수정</button>
            <button onClick={() => removeItemBtn(payload.id)}>삭제</button>
          </div>
        </ButtonWrapper>
      </Ul>
    </>
  );
};

export default Detail;
