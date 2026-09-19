import User from "./User";
import data from "../data/users.json";
import { useState } from "react";

function UserList() {
    console.log("Users", data);
    console.log("typeof users", typeof data);
    console.log("Array.isArray(users)", Array.isArray(data.users));
    
    const [users, setUsers] = useState(data.users);
    
    const onSort = () => {
        const sortedUser = [...users];
        sortedUser.sort(function(user1, user2){
            return (user1.age - user2.age)
        })

        setUsers(sortedUser)
    }

    const onReset = () => {
        setUsers(data.users)
    }


    
    const deleteUser = (e, id) => {
                
        const filterUsers = users.filter((user) => {
            return (user.id !== id)
        })
        
        setUsers(filterUsers)
        
        console.log("Deleted", id)
    }
    
    console.log(users[3].id);
    return(
        <div style={{"display":"flex", "flexDirection":"column", "gap":"1rem", "width":"100%",}}>
            <button onClick={() => onSort()} style={{"width":"fit-content"}}>Sort By Age</button>
            <button onClick={() => onReset()} style={{"width":"fit-content"}}>Reset Filter</button>
            <div style={{"display":"flex", "width":"100%", "background":"red", "gap":"10px", "flexWrap":"wrap", "padding":"10px", "border":"1px solid black"}}>
            
                {
                    users.map((user, index) => (
                        <User key={index} onDeleteUser={deleteUser} user={user} />
                    ))
                }
                {/* <User name={users[0].firstName} age={users[0].age} id={users[0].id} /> */}
            </div>
        </div>
    )
}

export default UserList;