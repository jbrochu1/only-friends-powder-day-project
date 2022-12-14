import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)


  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
          // fetchProductions()
        })
      }
    })
  },[])
  console.log(currentUser)
  
  const updateUser = (user) => setCurrentUser(user)
  
  if(errors) return <h1>{errors}</h1>

  return (
    <>
    <Router>
    <Nav updateUser={updateUser}/>

    {!currentUser? <Login error={'please login'} updateUser={updateUser}/> : 
    
      <Routes>
        <Route path='/' element={<Home updateUser={updateUser} currentUser={currentUser} />} />
        <Route path='/login' element={<Login updateUser={updateUser} />} />
      
      
      </Routes>
    }
    </Router>
    
    </>
  )
}

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
      
  // }, []);

  // console.log(count)
  // return (
    
    // <>
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
    // </>
  // )
// }

export default App
