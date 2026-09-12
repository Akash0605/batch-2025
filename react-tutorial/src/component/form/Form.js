import { useState } from "react";
export default function Form(){

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    
    console.log("Name : ", name);
    console.log("Password : ", password);

    function submitForm(e){
        e.preventDefault();
        console.log("Form submitted");
        console.log("Name : ", name);
        console.log("Password : ", password);

        setTimeout(() => {
            alert("Form submitted successfully");
            setName("");
            setPassword("");
        }, 2000);
    }

    return(
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit" onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}