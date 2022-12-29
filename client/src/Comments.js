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
    const commentList = comments.map(comment => {
        return ( <CommentList key={comment.id} commentId={comment.id} comment={comment.comment} username={comment.user.username} userId={comment.user.id} datestamp={comment.date} currentUser={currentUser} />
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
            <input type='submit' value='Create' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
            </form>
        {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
        </div>
    </div>
  )
}