import React, { useState, useEffect } from 'react';

const Users = ( { userList } ) => {

  
    if(!userList.length) {
        return (
            <h3>No registered users.</h3>
        );
    }

    return (

        <div>Im a list of users</div>
    );
};

export default Users;