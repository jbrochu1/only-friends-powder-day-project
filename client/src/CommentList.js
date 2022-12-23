export default function CommentList({currentUser, comment, username, datestamp, userId, commentId}){
    
    //  DELETES THE COMMENT
     const handleDelete = () => {
        fetch(`comments/${commentId}`, {
            method: 'DELETE',
        })
        // onDeleteContent()
        window.location.reload();
    }
    return(
        <div>
            <div>
                {comment}
                {username}
                {datestamp}
                
            </div>
            <div>
                {(currentUser.id === userId ) ? (<><button onClick={handleDelete} className='p-3 shadow bg-indigo-600 hover:bg-indigo-500 focus:shadow-outline focus:outline-none text-white font-bold rounded'>Delete</button></>) : null}
            </div>
        </div>
        // <ContentEditForm onEditContent={onEditContent} contentID={content.id} />
    )
}