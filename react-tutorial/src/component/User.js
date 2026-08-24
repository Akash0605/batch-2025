import "./user.css";

function User({name, id, age}){
    // console.log("Props",props);
    return(
        <div style={{"display":"flex", "gap":"0px", "border":"1px solid red", "fontWeight":"bold", "flexDirection":"column", "alignItems":"start"}}>
            <p className="id">User ID: {id}</p>
            <p className="name">User Name: {name}</p>
            <p className="age">User Age: {age}</p>
        </div>
    )
}

export default User;