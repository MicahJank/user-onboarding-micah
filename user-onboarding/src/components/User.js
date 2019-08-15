import React from 'react';

import styled from 'styled-components'; 


const UserCard = styled.div`
    width: 250px;
    padding: 20px;
    box-shadow: -4px 5px 38px -14px rgba(0,0,0,1);
`;


const User = ( { userInfo, key } ) => {

    return (
        <UserCard>
            <h2>{userInfo.name}</h2>
            <h3>{userInfo.email}</h3>
        </UserCard>
    );
};

export default User;