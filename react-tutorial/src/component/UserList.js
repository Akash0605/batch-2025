import User from "./User";
import data from "../data/users.json";

function UserList() {
    console.log("Users", data);
    console.log("typeof users", typeof data);
    console.log("Array.isArray(users)", Array.isArray(data.users));
    const users = data.users;
    console.log(users[0].firstName);
    return(
        <div style={{"display":"flex", "background":"red", "flexDirection":"column", "border":"1px solid black"}}>
            {
                users.map((user) => (
                    <User user={user} />
                ))
            }
            {/* <User name={users[0].firstName} age={users[0].age} id={users[0].id} /> */}
        </div>
    )
}

export default UserList;