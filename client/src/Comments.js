import { useState } from "react"
import CommentList from "./CommentList"

export default function Comments({currentUser, trip}) { 
    const {id, comments} = trip
    const [errors, setErrors] = useState(false)
    const [formData, setFormData] = useState({
        comment: '',
    
    })

  // HANDLER FUNCTION SETS STATE FOR FORM DATA BASED ON INPUT
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // PERSISTS FORM DATA TO DB OR RENDERS AN ERROR MESSAGE
  function onSubmit() {
    fetch('/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, trip_id: trip.id, user_id: currentUser.id })
    })
      .then(res => {
        // console.log(currentUser)
        if (res.ok) {
          res.json()
            // .then((newComment) => { handleNewComment(newComment) })
        }
        else {
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }

        

      })
    }
    console.log(comments)
    const commentList = comments.map(comment => {
        return ( <CommentList key={comment.id} comment={comment.comment} currentUser={currentUser} />
    )})  


  return (
    <div>
        <div>
            Comments: {commentList}
        </div>
        <div>  
            <form onSubmit={onSubmit}>
            <label>Enter Comment: </label>
            <input type='text' name='comment' value={formData.comment} onChange={handleChange} />
            <input type='submit' value='Create' className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'/>
            </form>
        {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    </div>
  )
}