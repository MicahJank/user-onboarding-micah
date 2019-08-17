import React, { useState, useEffect } from 'react';

import UserForm from './components/UserForm.js';
import Users from './components/Users.js';
import SearchForm from './components/SearchForm.js';

import styled from 'styled-components';

import BackgroundImg from './imgs/desert.jpg';

import './App.css';

const Container = styled.div`
  background-color: #1D1E22;
  height: 100%;

  .background {
    background-image: url(${BackgroundImg});
    filter: blur(8px);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
  }

`;

function App() {

  const [users, setUsers] = useState([]);

  const [displayedUsers, setDisplayedUsers] = useState([])

  useEffect(() => {

    setDisplayedUsers(users);
    console.log('users changed');

  }, [users]);


  const addUser = user => {
    setUsers([...users, user]);
  };
 
  const createSearchedUsers = (search) => {
    if(search) {
      const filteredUsers = users.filter(user => {
        return user.name === search;
      });
      setDisplayedUsers(filteredUsers);
    } else {
      setDisplayedUsers(users);
    }
  };

  console.log('users: ', users);
  console.log('displayedUsers: ', displayedUsers);

  return (
    <div className="App">
      <Container>
        <div className='background'></div>
        <div className='main'>
          <div className='user-form'>
            <UserForm addUserFunction={addUser} />
          </div>

          <SearchForm searchFunction={createSearchedUsers} />

          <div className='users'>
            <Users users={users} displayedUsers={displayedUsers} setUsers={setUsers}/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
