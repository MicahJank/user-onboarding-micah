import React, { useState } from 'react';

import UserForm from './components/UserForm.js';
import Users from './components/Users.js';

import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <UserForm />
      <Users userList={users} />
    </div>
  );
}

export default App;
