
import './App.css';
import UserList from "./component/UserList"
import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
