

// 1. Lifecycle hooks (a.k.a. life-cycle methods)
// 2. React Hooks™

import {useEffect, useState, use} from "react";

export function ContactsListModule () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Seems like componentDidMount");
    fetch('https://jsonplaceholder.typicode.com/users/').then(res => res.json()).then((data) => {
      setUsers(data);
    });
  }, []);

  useEffect(() => {
    console.log("Seems like componentDidUpdate");

    return () => {
      console.log("Seems like componentWillUnmount");
    };
  });

  setTimeout(() => {
    setUsers([]);
  }, 10000);

  console.log('re-render');
  return (
    <div>
      {users.map(user => <p className={'todoItem'} key={user.id}>{user.name}</p>)}
    </div>
  );
}
