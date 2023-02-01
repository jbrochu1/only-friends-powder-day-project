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
    window.location.reload();
  };
  return (
    <div className="chat-start">
      <div className="chat-bubble chat-bubble-primary p-2">
        {currentUser.id === userId ? (
          <div className="flex justify-center">
            <button onClick={handleDelete} className="btn btn-error btn-xs">
              Delete
            </button>
          </div>
        ) : null}
        {comment}
        <br></br>
        {username}
        <br></br>
        {format(new Date(datestamp), "E MM/dd/yyyy hh:mm aaa")}
        <br></br>
      </div>
    </div>
  );
}
