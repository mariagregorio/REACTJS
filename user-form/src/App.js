import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

const App = () => {
  const initialUsers = [
    { id: 1, username: 'Pepito1', age: 4 },
    { id: 2, username: 'Bambinita', age: 9 },
    { id: 3, username: 'María', age: 34 },
  ]

  const [users, setUsers] = useState(initialUsers)

  const addUser = (userData) => {
    const newUser = {id: users.length + 1, ...userData}
    setUsers(prevUsers => prevUsers.concat(newUser))
  }

  return (
    <div style={{padding: '1rem'}}>
      <AddUser addUser={addUser} />
      <UsersList users={users} />
    </div>
  );
};

export default App;
