export default function TripCard({trip}) {
    const {user_id, trip_start, trip_end, mountains, users, comments} = trip
    // const mtnNames = mountains.map(mountain => name={mountain.name})
    // console.log(comments)
    return (
        <div className="rounded-xl p-8 space-y-4 shadow-lg">
            {/* <div>Mountain Id: {mountain_id}</div> */}
            <div>Creator: {user_id}</div>
            <div>Start: {trip_start}</div>
            <div>End: {trip_end}</div>
            <div>Location: {mountains.map(mtnInfo => <p>{mtnInfo.name}</p>)}</div>
            <div>People Joining: {users.map(userInfo => <p>{userInfo.first_name}</p>)}</div>
            <div>Comments: {comments.map(comment => <p>{comment.user.username}{comment.comment}</p>)}</div>
        </div>        
    )
}