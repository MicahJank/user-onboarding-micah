import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import User from './User.js';



const UsersContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
`;

const Users = ( { userList, setUsers } ) => {

  
    if(!userList.length) {
        return (
            <h3>No registered users.</h3>
        );
    }

    // deleteUser is a function that will be passed down into the user.js component and be used with the delete button on the user card.
    // in order to changed the userList array i have passed down the setUser state function from app.js and use it here with the new array i create by filtering out
    // any user that has the same id as the passed in user. The passed in user is specified in the user.js component.
    const deleteUser = user => {
       const deletedUserArray = userList.filter((userInList) => {
            return userInList.id !== user.id;
        })

        setUsers(deletedUserArray);
    };

    return (
        <UsersContainer>
            {userList.map((user) => {
                return <User userInfo={user} key={user.id} deleteFunction={deleteUser} />
            })}
        </UsersContainer>
    );
};

export default Users;