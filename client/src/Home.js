import { useEffect, useState } from "react"
import TripsList from "./TripsList";

export default function Home({currentUser, setIsVisible, isVisible}) {

    const [trips, setTrips] = useState([])
    const [errors, setErrors] = useState(false)

    
    useEffect(() => {
        fetch('/trips')
          .then((res) => {
            if (res.ok) {
              res.json().then(setTrips)
              .then(setIsVisible(true))
            } else {
              res.json().then(data => setErrors(data.error))
            }
          })
      }, []);

      // console.log(trips)
    
    return (
        <>
            <TripsList trips={trips} currentUser={currentUser} isVisible={isVisible} setIsVisible={setIsVisible}/>
        </>
    )
}