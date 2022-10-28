import React, {useState, useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'

function App() {
    // initialize state of each variables
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState("")
    const [count, setCount] = useState(0)

    // run after rendering
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>setRobots(users))
    }, [count]) // only run useEffect() if count changes)
    const onSearchChange = (event) =>{
        setSearchfield(event.target.value)
    }
    const filteredRobots = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (!robots.length)
    {
        return <h1>Loading</h1>
    }
    else{
        return(
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <button onClick={()=>setCount(count+1)}>Count Number: {count}</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            )
        }
}

// class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             robots: [],
//             searchfield:''
//         }
//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(response=>response.json())
//             .then(users=>this.setState({robots:users}))
//     }
//     onSearchChange = (event)=>{
//         this.setState({searchfield:event.target.value})
//     }
//     render(){
//         const {robots, searchfield} = this.state
//         const filteredRobots = robots.filter(robot=>{
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase())
//         })
//         if (robots.lengths)
//         {
//             return <h1>Loading</h1>
//         }
//         else{
//             return(
//                 <div className='tc'>
//                     <h1 className='f2'>RoboFriends</h1>
//                     <SearchBox searchChange={this.onSearchChange}/>
//                     <Scroll>
//                         <ErrorBoundry>
//                         <CardList robots={filteredRobots}/>
//                         </ErrorBoundry>
//                     </Scroll>
//                 </div>
//             )
//         }

//     }

// }

export default App;