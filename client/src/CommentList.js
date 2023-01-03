import { format } from "date-fns";

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
                {format(new Date(datestamp), 'E MM/dd/yyyy')}
            </div>
            <div>
                {(currentUser.id === userId ) ? (<><button onClick={handleDelete} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Delete</button></>) : null}
            </div>
        </div>
        // <ContentEditForm onEditContent={onEditContent} contentID={content.id} />
    )
}