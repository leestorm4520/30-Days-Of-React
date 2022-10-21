//////////////////////////////////////////////////////////////////////////////
//Welcome to React Template
/*
import React from 'react'
import ReactDOM from 'react-dom'
import corgi from './images/corgi.webp'
// To get the root element from the HTML document

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)
const corgiImg=(
  <div>
    <img src={corgi} alt='corgiImage'/>
  </div>
)
// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      {result}
      {personAge}
      {corgiImg}
    </div>
  </main>
)



const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
*/


//////////////////////////////////////////////////////////////////////////////////////////////////
//Front end Technologies
// import React from 'react'
// import ReactDOM from 'react-dom'
// import images from './images'

// const html=(
//   <div>
//     <img src={images.html5} alt='html'/>
//   </div>
// )
// const css=(
//   <div>
//     <img src={images.css} alt='css'/>
//   </div>
// )
// const js=(
//   <div>
//     <img src={images.js} alt='js'/>
//   </div>
// )
// const react=(
//   <div>
//     <img src={images.react} alt='react'/>
//   </div>
// )

// const main=(
//   <main>
//     <h2>Front End Technologies</h2>
//     {html}
//     {css}
//     {js}
//     {react}
//   </main>
// )
// const app=(
//   <div>{main}</div>
// )
// const rootElement=document.getElementById('root');
// ReactDOM.render(app, rootElement)


//////////////////////////////////////////////////////////////////////////////////////////////
//Subscribe Template
// import React from 'react'
// import ReactDOM from 'react-dom'

// const Main=()=>(
//   <main>
//       <h1>SUBSCRIBE</h1>
//       <p>Sign up with your email address to receive news and updates</p>
//       <form>
//         <div>
//         <input type='text' id='fName' placeholder='First Name'></input>
//         <input type='text' id='lName' placeHolder='Last Name'></input>
//         <input type='email' id='email' placeHolder='Email'></input>
//         </div>
//         <div>
//           <button type='submit'>Submit</button>
//         </div>
//       </form>

//   </main>

// )

// const App=()=>(
//   <div className='app'>
//     <Main/>
//   </div>
// )

// const rootElement=document.getElementById('root');
// ReactDOM.render(<App/>, rootElement);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Random Colors
// import React from 'react'
// import ReactDOM from 'react-dom'

// const random=()=>{
//   let str='0123456789abcdef'
//   let color=''
//   for(let i=0;i<6;i++){
//     let index=Math.floor(Math.random()*str.length)
//     color+=str[index]
//   }
//   return '#'+color
// }

// const ArrColor = ()=>{
//   const colors = []
//   for(let i=0; i<32; i++)
//   {
//     colors.push(random());
//   }
//   const colorsDiv = colors.map((color)=>(
//     <div key={color} style={{backgroundColor:`${color}`}}>{color}</div>
//   ))
//   return colorsDiv
// }

// // const Random=()=>(
// //   <div>
// //     <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
// //     <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
// //     <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
// //     <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
// //     <div className="random" style={{backgroundColor:`${random()}` }}>{random()}</div>
// //   </div>

// // )

// const Course = () => (<h1>30 Days of React</h1>)
// const Title = () => ( <h2>Hexidecimal Color</h2>)

// const App=()=>(
//   <div className='app'>
//     <div>
//       <Course/>
//       <Title/>
//     </div>
//     <div className='color'>
//       <ArrColor/>
//     </div>
//   </div>
// )
// const rootElement=document.getElementById('root');
// ReactDOM.render(<App/>,rootElement);

import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Todos from "./Todos";
import './App.css';

const Header = () =>{
  return (
    <>
      {/* <h1 style={{header}}>Hello Style!</h1> */}
      <p>Try out my own style</p>
    </>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = ()=>{
    setCount((c)=>c+1);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Header />
      <Todos todos={todos}/>
      <hr/>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);