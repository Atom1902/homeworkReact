import React from 'react';

const User = ({user,setUserId}) => {

    return (
        <div className='user'>
            <p>{user.name}</p>

            <button onClick={()=> setUserId(user.id)}>user posts</button>
        </div>
    );
};

export {User};

