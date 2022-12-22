export default function CommentContainer() {

    const [commentData, setCommentData] = useState({
        user_id: '',
        comment: ''
        // mountain_id: ''
      })

    return (
        <>
            <div>Comments: {comments.map(comment => <p>{comment.user.username}{comment.comment}</p>)}</div>
            <div>
            <div>
                <p className='text-2xl p-3'>Add Comment</p>
            </div>
            <div className='p-2 max-w-lg'>
                { errors ? errors.map(e => <div>{e}</div>) : null}
                <form onSubmit={onSubmit} className='justify-center items-center'>
                <div className='p-2 space-x-2'>
                    <label>
                        Comment
                    </label>
                    <input type='text' name='comment' className='w-2/3 float-right' value={commentData.comment} onChange={handleChange} />
                    </div>
                    <div className='p-5'>
                    <input type='submit' value='Add Comment' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'/>
                    </div>
                </form>
                </div>
                {errors ? errors.map(e => <h2 style={{ color: 'red' }}>{e.toUpperCase()}</h2>) : null}
            </div>
        </>
    )
}