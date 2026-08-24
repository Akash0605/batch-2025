import User from "./User";
function UserList() {
    return(
        <div style={{"display":"flex", "flexDirection":"column", "border":"1px solid black"}}>
            <User name="Vikas" age="25" id="1" />
            <User name="Akash" age="25" id="2" />
            <User name="Ishan" age="25" id="3" />
        </div>
    )
}

export default UserList;