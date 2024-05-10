import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Numbers Of Users : {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="add user" />
      </form>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>Name : {user.name}</h3>
              <h3>Email : {user.email}</h3>
              <h3>Id : {user.id}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
