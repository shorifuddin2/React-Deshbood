import logo from './logo.svg';
import './App.css';
import { useState, useEffect} from 'react';

function App() {
   const [users, setUsers] = useState([])

   useEffect(() => {
    fetch(`http://localhost:5000/users/`)
    .then(res => res.json())
    .then(data => setUsers(data))
   }, [])
  return (
    <div className="App">
     <h1>My Won Data</h1>
     <h1>Data: {users.length}</h1>

     <ul>
      {
        users.map(user =><li key={user.id}>{user.name}</li>)
      }
     </ul>
    </div>
  );
}

export default App;
