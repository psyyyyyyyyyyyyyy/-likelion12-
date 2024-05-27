import React, { useState } from 'react'
import styled from 'styled-components';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css' 

const TodoContainar = styled.div`
font-family: Arial, sans-serif;

`;

const TodoInput = styled.input`
 padding: 10px;
 font-size: 16px;
 margin-bottom: 10px;
 background-color: #666666;
`;

const TodoItem=styled.div`
 background-color: #000000;
 padding: 10px;
 margin-bottom: 5px;
`;

const TodoText = styled.span`
  margin-right: 10px;
`;

const TodoList = styled.div`
margin-top: 20px;
`;  

const DeleteButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const OXButton = styled.button`
  background-color: #3399ff;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const[inputValue, setInputValue] = useState('');
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, {text : inputValue, completed : false }]);
    setInputValue('');
  };



const deleteTodo = (index) => { //인덱스는 삭제할 일의 위치
  const newTodos = [...todos];
    newTodos.splice(index, 1); //splice 함수로 인덱스에서 1개의 항목 제거
    setTodos(newTodos);
}

const Completion = (index) => {
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed; //인덱스별 completed를 바꿔줌
  setTodos(newTodos);
};


  return (
    <TodoContainar>
      <h1>과제 List</h1>
      <TodoInput onChange={handleChange}  type = 'text'  placeholder='과제를 입력하시오.'  value={inputValue}>
      </TodoInput>

      <button onClick={handleAddTodo}>과제 추가</button>
     
      <TodoList>
        <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <TodoItem>
              <TodoText>{item.text}</TodoText>
              <OXButton onClick={() => Completion(index)}>
                  {item.completed ? '완료' : '미완료'}</OXButton>
              <DeleteButton onClick={() => deleteTodo(index)}>삭제</DeleteButton>
              </TodoItem>
            </li>
        ))}
        </ul>

      </TodoList>
    </TodoContainar>
  );
};

export default App;
