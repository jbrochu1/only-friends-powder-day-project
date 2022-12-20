import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import AddTrip from './AddTrip';


function App() {
  const [trips, setTrips] = useState([])
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
  
    // STATE HANDLER FOR USER V. GUEST
  const updateUser = (user) => setCurrentUser(user)
  
  // HANDLER FUNCTION TO POST NEW PLACE
  const addTrip = (newTrip) => setTrips(trips => [...trips, newTrip])

  if(errors) return <h1>{errors}</h1>

  return (
    <>
    <Router>
    <Nav updateUser={updateUser} currentUser={currentUser}/>

    {!currentUser? <Login error={'please login'} updateUser={updateUser}/> : 
    
      <Routes>
        <Route path='/' element={<Home updateUser={updateUser} currentUser={currentUser} />} />
        <Route path='/login' element={<Login updateUser={updateUser} />} />
        <Route path='/trips/new' element={<AddTrip addtrip={addTrip} updateUser={updateUser} currentUser={currentUser} />} />
      
      </Routes>
    }
    </Router>
    
    </>
  )
}

export default App
