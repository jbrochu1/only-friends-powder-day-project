import { format } from "date-fns";

export default function CommentList({
  currentUser,
  comment,
  username,
  datestamp,
  userId,
  commentId,
}) {
  //  DELETES THE COMMENT
  const handleDelete = () => {
    fetch(`/comments/${commentId}`, {
      method: "DELETE",
    });
    // onDeleteContent()
    window.location.reload();
  };
  return (
    <div className="columns-2 p-2">
      <div>
        <div>
          {comment}
        </div>
        <div>
          {username} - {format(new Date(datestamp), "E MM/dd/yyyy hh:mm aaa")}
        </div>
        <div>
          
        </div>
      </div>
      <div>
        {currentUser.id === userId ? (
          <>
            <button
              onClick={handleDelete}
              className="btn btn-accent btn-sm"
              // className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Delete
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
