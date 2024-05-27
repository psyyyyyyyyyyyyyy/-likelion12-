import { useEffect, useState } from 'react'
import './App.css'

function Get() {
  const [data, setData] = useState('초기화');
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((Response)=>{
      return Response.json();
    })
    .then((json)=>{
      console.log(json);
      setData(json);
    })
    .catch((error)=>{
      console.log('Error:',error);
      setData(error);
    }).finally(()=>{
      console.log('Finally end');
    })
  }, []);

  return (
    <>
      <h1>Get</h1>
      <div>
        <p>{JSON.stringify(data)}</p>
      </div>
    </>
  )
}

export default Get
