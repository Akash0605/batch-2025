import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://dummyjson.com/users'
      );

      setData(response.data.users);

      // API response ko yahan access kar sakte hain
      console.log(response.data.users);
      console.log(response.data.users[0].firstName);
    } catch (error) {
      console.error('Error fetching users:', error);
    }

  };

  useEffect(() => {
    getData();
  }, []);

  // State update hone ke baad users render honge
  return (<div> <h1>Users List</h1>

    {data.map((item) => (
      <div key={item.id}>
        <h3>{item.firstName} {item.lastName}</h3>
        <p>{item.email}</p>
      </div>
    ))}
  </div>

  );
}

export default App;
