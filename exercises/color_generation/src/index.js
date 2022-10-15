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
import React from 'react'
import ReactDOM from 'react-dom'
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