import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components'; 


const UserCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    background-color: white;
    box-shadow: -4px 5px 38px -14px rgba(0,0,0,1);
    border-radius: 10px;

    .img-container {
        padding: 30px 50px;
        background-color: #F5F6F8;
        border-radius: 50%;
        margin: 50px;

        .img {
            font-size: 4rem;
            color: #E7EAEF;
        }
    }

    .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 250px;
        width: 350px;
        flex-direction: column;
        background-color: #F5F6F8;
        border-radius: 0 10px 10px 0;
    }
`;


const User = ( { userInfo, key } ) => {

    return (
        <UserCard>
            <div className='img-container'>
                <div className='img'>
                    <FontAwesomeIcon icon={faPortrait} />
                </div>
            </div>
            <div className='user-info'>
                <h2>{userInfo.name}</h2>
                <h3>{userInfo.email}</h3>
            </div>
           
        </UserCard>
    );
};

export default User;