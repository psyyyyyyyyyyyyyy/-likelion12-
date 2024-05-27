import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components';

const FetchInput = styled.input`
 padding: 10px;
 font-size: 16px;
 margin-bottom: 10px;
 background-color: #666666;
`;


function Post() {
    const[inputIdValue, setInputIdValue] = useState('');
    const [data, setData] = useState('초기화');
    const idChange = (event) => {
        setInputIdValue(event.target.value);
      };
    
      const[inputTitleValue, setInputTitleValue] = useState('');

      const titleChange = (event) => {
          setInputTitleValue(event.target.value);
        };
        const[inputBodyValue, setInputBodyValue] = useState('');

        const bodyChange = (event) => {
            setInputBodyValue(event.target.value);
          };

  const update = () => {

 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: inputTitleValue,
            body: inputBodyValue,
            userId : 1,
            id: inputIdValue,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((Response)=>{
      return Response.json();
    })
    .then((json)=>{
      console.log(json);
      setData(json);
    
  });
  };




  return (
    <>
      <div>
        <h1>Post</h1>
        <div>
        <FetchInput onChange={idChange}  type = 'text'  placeholder='id'  value={inputIdValue}>
      </FetchInput></div>
      <div>
      <FetchInput onChange={titleChange}  type = 'text'  placeholder='title'  value={inputTitleValue}>
      </FetchInput></div>
      <div>
      <FetchInput onChange={bodyChange}  type = 'text'  placeholder='body'  value={inputBodyValue}>
      </FetchInput></div>

        <button onClick={update}>POST</button>
      </div>
    </>
  )
}

export default Post
