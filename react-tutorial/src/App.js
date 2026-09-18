
import './App.css';
import UserList from "./component/UserList"
import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"
import Login from "./component/login/Login"
import Form from "./component/form/Form"
import Counter from './component/counter/Counter';

import { useState } from 'react';

function App() {

  localStorage.setItem("isLoggedIn", "true")
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("Logged in : ", isLoggedIn);
  console.log("Type of isLoggedIn : ", typeof isLoggedIn);
  const isLoggedInBool = (isLoggedIn === "true");
  console.log("Type of isLoggedInBool : ", typeof isLoggedInBool);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedInBool} />

      {
        isLoggedInBool ? <UserList /> : <Login />
      }

      {/* <Form /> */}

      {/* <Counter /> */}

      <Footer />
    </div>
  );
}

export default App;
