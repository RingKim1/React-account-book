import React from "react";
import styled from "styled-components";

const Div = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const FormContent = ({ FormContent, value, setValue, type }) => {
  return (
    <Div>
      {FormContent}
      <input
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </Div>
  );
};

export default FormContent;
