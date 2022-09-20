import React, { useState } from 'react';


import { Users }from "../Users/Users";
import { Posts } from '../Posts/Posts';




const UsersAndInfo = () => {

    let [setUser] = useState(null);
    let [userId,setUserId] = useState(null);

    return (
        <div>
            <div className="usersAndInfo">
                <Users setUser={setUser} setUserId={setUserId}/>
                {userId && <Posts userId={userId}/>}
            </div>

        </div>
    );
};

export  {UsersAndInfo};
