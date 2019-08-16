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

const Users = ( { userList } ) => {

  
    if(!userList.length) {
        return (
            <h3>No registered users.</h3>
        );
    }

    return (
        <UsersContainer>
            {userList.map((user) => {
                return <User userInfo={user} key={user.id} />
            })}
        </UsersContainer>
    );
};

export default Users;