import { useEffect, useState } from "react";
import User from "./User";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllUsers(data);
      });
  }, []);
  return (
    <>
      <section>
        <h1>{allUsers.length} Users Are Available Now.......</h1>
        <div>
          {allUsers.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllUsers;
