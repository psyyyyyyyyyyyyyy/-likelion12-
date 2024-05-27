import { Link } from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';
import picture2 from './img/home.jpg'

const TodoContainar = styled.div`
font-family: Arial, sans-serif;

`;

const TodoInput = styled.input`
 padding: 10px;
 font-size: 16px;
 margin-bottom: 10px;
 background-color: #666666;
`;

const TodoItem = styled.div`
  background-color : #f0f0f0;
  padding: 10px;
  margin-bottom: 5px;
`;

const TodoText = styled.span`
  margin-right: 20px;
`;

const TodoList = styled.div`
margin-top: 10px;
`;  
const AddButton = styled.button`
  background-color: #000000;
  color: white;
  border-color: black;
  padding: 11px 12px;
  cursor: pointer;
`;
const DeleteButton = styled.button`
  background-color: #ff3333;
  color: white;
  border-color: black;
  padding: 5px 10px;
  cursor: pointer;
`;


export default function HomePage(){
    const [like, setTime] = useState(1);
    const handleClick=() => {
        setTime (like + 1);
    };

    const [todos, setTodos] = useState([]);
    const[inputValue, setInputValue] = useState('');
        
    const handleChange = (event) => {
          setInputValue(event.target.value);
    };
      
    const handleAddTodo = () => {
          setTodos([...todos, {text : inputValue }]);
          setInputValue('');
    };
      
      
      
    const deleteTodo = (index) => { //인덱스는 삭제할 일의 위치
        const newTodos = [...todos];
          newTodos.splice(index, 1); //splice 함수로 인덱스에서 1개의 항목 제거
          setTodos(newTodos);
    };
      

    return(
        <>
        <img src={picture2} width = '300px'/>
            <h1>박성연의 홈페이지입니다.</h1>
            <span> 좋아요 : </span>
            <button onClick={handleClick}>❤️</button>
            <span> {like}개</span>
            <TodoContainar>
      <h2>방명록</h2>
      <TodoInput onChange={handleChange}  type = 'text'  placeholder='방명록을 남겨주세요.'  value={inputValue}>
      </TodoInput>

      <AddButton onClick={handleAddTodo}>추가</AddButton>
     
      <TodoList>
        
        <ul>
        {todos.map((item, index) => (
          <li key={index}>
            <TodoItem>
              <TodoText>{item.text}</TodoText>
              <DeleteButton onClick={() => deleteTodo(index)}>삭제</DeleteButton>
              </TodoItem>
            </li>
        ))}
        </ul>
        
      </TodoList>
    
    </TodoContainar>

            
    
        </>
    );
}