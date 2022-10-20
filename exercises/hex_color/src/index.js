import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const random=()=>{
  let str='0123456789abcdef'
  let color=''
  for(let i=0;i<6;i++){
    let index=Math.floor(Math.random()*str.length)
    color+=str[index]
  }
  return '#'+color
}

const Random=()=>(
  <div>
    <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
    <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
    <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
    <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
    <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
  </div>

)

const App=()=>(
  <div className='app'>
    <Random/>
  </div>
)
const rootElement=document.getElementById('root');
ReactDOM.render(<App/>,rootElement);