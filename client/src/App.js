import './App.css';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Login from './Login';
import AddTrip from './AddTrip';
// import EditUser from './EditUser';
import TripDetail from './TripDetail';
import EditTrip from './EditTrip';
import Signup from './Signup';


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
    // fetch('/mountains')
    // .then(res => {
    //   if(res.ok){
    //     res.json().then(mtns => {
    //       setMountains(mtns)        
    //     })
    //   }
    // })
  },[])
  // console.log(currentUser)
  
    // STATE HANDLER FOR USER V. GUEST
  const updateUser = (user) => setCurrentUser(user)
  
  // HANDLER FUNCTION TO POST NEW PLACE
  const addTrip = (newTrip) => setTrips(trips => [...trips, newTrip])

  if(errors) return <h1>{errors}</h1>

  return (
    <>
    <Router>
    <Nav updateUser={updateUser} currentUser={currentUser}/>

    {!currentUser? 
    <Login error={'please login'} updateUser={updateUser}/> 
    : 
    
      <Routes>
        <Route path='/' element={<Home updateUser={updateUser} currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} />} />
        <Route path='/login' element={<Login updateUser={updateUser} />} />
        <Route path='/trips/new' element={<AddTrip addtrip={addTrip} updateUser={updateUser} currentUser={currentUser} mountains={mountains}/>} />
        {/* <Route path='/users/:id' element={<EditUser currentUser={currentUser} />} /> */}
        <Route path='/users/new' element={<Signup />} />
        <Route path='/trips/:tripId' element={<TripDetail currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} />} />
        <Route path='/trips/edit/:tripId' element={<EditTrip currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible} mountains={mountains} />} />
      </Routes>
    }
    </Router>
    
    </>
  )
}

export default App
