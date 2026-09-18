import User from "./User";
import data from "../data/users.json";
import { useState } from "react";

function UserList() {
    console.log("Users", data);
    console.log("typeof users", typeof data);
    console.log("Array.isArray(users)", Array.isArray(data.users));
    
    const [users, setUsers] = useState(data.users);
    
    const deleteUser = (e, id) => {
                
        const filterUsers = users.filter((user) => {
            return (user.id !== id)
        })
        
        setUsers(filterUsers)
        
        console.log("Deleted", id)
    }
    
    console.log(users[3].id);
    return(
        <div style={{"display":"flex", "flexDirection":"column", "width":"100%",}}>
            <button>Sorting</button>
            <div style={{"display":"flex", "width":"100%", "background":"red", "gap":"10px", "flexWrap":"wrap", "padding":"10px", "border":"1px solid black"}}>
            
                {
                    users.map((user) => (
                        <User onDeleteUser={deleteUser} user={user} />
                    ))
                }
                {/* <User name={users[0].firstName} age={users[0].age} id={users[0].id} /> */}
            </div>
        </div>
    )
}

export default UserList;