import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './profile';

function Refort() {
 
  return (
    <>
    <Profile
    name = "박성연"
    introduction = "안녕하세요. 박성연입니다."
    viewCount={1500}
    />
    <Profile
    name="신채린"
    introduction = "안녕하세요. 신채린입니다."
    viewCount={2500}
    />
    <Profile
    name="조연제"
    introduction = "안녕하세요. 조연제입니다."
    viewCount={3000}
    />
    
    </>
  );
}

export default Refort
