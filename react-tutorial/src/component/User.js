import "./user.css";

function User({user, onDeleteUser}){
    // console.log("Props",props);
    return(
        <div style={{"display":"flex", "gap":"0px", "padding":"10px", "border":"1px solid white", "fontWeight":"bold", "flexDirection":"column", "alignItems":"start"}}>
            <p className="id">User ID: {user.id}</p>
            <p className="name">User Name: {user.firstName}</p>
            <p className="age">User Age: {user.age}</p>
            <p className="email">User Email: {user.email}</p>
            <p className="gender">User Gender: {user.gender}</p>
            <p className="phone">User Phone: {user.phone}</p>
            
            <div className="dlt"><button className="delete" type="button" onClick={(e) => onDeleteUser(e, user.id)}>Delete</button></div>
        </div>
    )
}

export default User;