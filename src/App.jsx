// import { useEffect, useState } from "react";

import AddUser from "./comonents/AddUser";
import AllUsers from "./comonents/AllUsers";

function App() {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // console.log(users);

  // const handleAddUser = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;
  //   const user = { name, email };
  // console.log(name, email);
  // console.log(user);

  //   fetch("http://localhost:5000/users", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => res.json())

  //     .then((data) => {
  //       console.log(data);
  //       // const newUsers = { ...users, data };
  //       // setUsers(newUsers);
  //       form.reset();
  //     });
  // };
  return (
    <>
      <AddUser />
      <AllUsers />
      {/* <h1>User Management Server</h1>
      <h3>Numbers of Users: {users.length}</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" /> <br /> <br />
        <input type="email" name="email" id="" /> <br /> <br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        <p>hellow wordd</p>
        {users.map((user) => (
          <div key={user.id}>
            <p>
              {user.name} | email:{user.email}
            </p>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;
