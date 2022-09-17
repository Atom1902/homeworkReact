import React from 'react';
import "./ComponentOfSpaceX.css"


const ComponentOfSpaceX = (props) => {
    const {mission_name,launch_year,mission_patch_small} = props;

    return (
        <div className='post'>
            <h3>{mission_name}</h3>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt="description of non"/>
        </div>
    )
};

export default ComponentOfSpaceX;