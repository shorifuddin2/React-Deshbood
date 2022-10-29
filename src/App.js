
import './App.css';
import { useState, useEffect} from 'react';

function App() {
   const [users, setUsers] = useState([])

   useEffect(() => {
    fetch(`http://localhost:5000/users/`)
    .then(res => res.json())
    .then(data => setUsers(data))
   }, [])

   const handelSubmit = event =>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = {name, email}

    fetch('http://localhost:5000/users/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
})
  .then((res) => res.json())
  .then((data) => {
    const newUsers = [...users, data];
    setUsers(newUsers);
    console.log(data)
  })

   }
  return (
    <div className="App">

  
     <h1>My Won Data</h1>
     <h1>Data: {users.length}</h1>
     <form onSubmit={handelSubmit}>
      <input type="name" name="name" placeholder='Name' required/>
      <input type="email" name="email" placeholder='Email' required/>
      <input type="submit" name="" value="Submit"/>
     </form>
     <ul>
      {
        users.map(user =><li key={user.id}>{user.name}</li>)
      }
     </ul>
    </div>
  );
}

export default App;
