
import './App.css';
import UserList from "./component/UserList"
import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"
import Login from "./component/login/Login"
import Form from "./component/form/Form"

import { useState } from 'react';

function App() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("Logged in : ", isLoggedIn);
  console.log("Type of isLoggedIn : ", typeof isLoggedIn);
  const isLoggedInBool = (isLoggedIn === "true");
  console.log("Type of isLoggedInBool : ", typeof isLoggedInBool);

  const [count, setCount] = useState(0);


  const increment = () => {
    console.log("Increment button clicked");
    // count++;

    setCount(count + 1);
  };

  const decrement = () => {
    console.log("Decrement button clicked");
    // count--;

    setCount(count - 1);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedInBool} />

      {/* {
        isLoggedInBool ? <UserList /> : <Login />
      } */}

      <Form />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>

        <h1>Current Count: {count}</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={increment}>+ Increment</button>
          <button onClick={decrement}>- Decrement</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
