import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todosReducer";
import styled from "styled-components";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // const inputRef = useRef(null);

  // useEffect(() => {

  //   inputRef.current.focus();
  // }, []);
    const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return;
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label>Todo title</label>
        <StInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <StButton>Add</StButton>
      </form>
    </StFormContainer>
  );
};

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
`;

export default AddForm;