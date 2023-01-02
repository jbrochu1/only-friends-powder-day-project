import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import AddTrip from './AddTrip';
import EditUser from './EditUser';
import TripDetail from './TripDetail';
import EditTrip from './EditTrip';
import Signup from './Signup';
import Welcome from './Welcome';


function App() {
  const [trips, setTrips] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [mountains, setMountains] = useState([
    {
      
      name: "",
      address: "",
      image: "",
      elevation: "",
      blackout_dates: "",
      ski_pass: ""
    }
  ])


  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json().then(user => {
          updateUser(user)
          // fetchTrips()
        })
      }
    })
    fetch('/mountains')
    .then(res => {
      if(res.ok){
        res.json().then(mtns => {
          setMountains(mtns)        
        })
      }
    })
  },[])
  
    // STATE HANDLER FOR USER V. GUEST
  const updateUser = (user) => setCurrentUser(user)
  
  // HANDLER FUNCTION TO POST NEW PLACE
  const addTrip = (newTrip) => setTrips(trips => [...trips, newTrip])

  if(errors) return <h1>{errors}</h1>

  return (
    <>
    <Router>
    

    {currentUser ? (
      <>
        <Nav updateUser={updateUser} currentUser={currentUser}/>
        <Routes>
          {/* <Route exact path='/' element={<Login updateUser={updateUser}/>} /> */}
          <Route exact path='/' element={<Home updateUser={updateUser} currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} />} />
          <Route path='/trips/new' element={<AddTrip addtrip={addTrip} updateUser={updateUser} currentUser={currentUser} mountains={mountains}/>} />
          <Route path='/users/:id' element={<EditUser currentUser={currentUser} />} />
          <Route path='/trips/:id' element={<TripDetail currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} />} />
          <Route path='/trips/:id/edit' element={<EditTrip currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} mountains={mountains} />} />
        </Routes>   
      </>
    )
    : (
      <>
        <Nav updateUser={updateUser} currentUser={currentUser}/>
        <Routes>
          {/* <Route exact path='/welcome' element={<Welcome currentUser={currentUser} />}/> */}
          <Route exact path='/' element={<Login error={'please login or signup'} updateUser={updateUser}/>} />
          <Route path='/users/new' element={<Signup updateUser={updateUser}/>} />
        </Routes> 
      </>
    )}
    </Router>
    </>
  )
}

export default App
