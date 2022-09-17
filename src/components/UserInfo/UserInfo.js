import React from 'react';

const UserInfo = ({user, setUserId}) => {

    return (
        <div className='userInfo'>
            <p>id - {user.id}</p>
            <p>name - {user.name}</p>
            <p>username - {user.username}</p>
            <p>email - {user.email}</p>
            <p>phone - {user.phone}</p>
            <p>website - {user.website}</p>

        </div>
    );
};

export {UserInfo};