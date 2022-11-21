/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import '../styles/screen.css'

export default function App() {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2&per_page=6");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
    <h1>Correct authentication</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
              <br></br>
                <p>
                  <strong>{user.first_name}</strong>
                  <br></br>
                  <strong>{user.last_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
