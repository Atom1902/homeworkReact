import {useEffect, useState} from "react";

import {ComponentOfSpaceX} from "../index";
import "./SpaceX.css"
const SpaceX =()=>{

    const [infoSpaceX,setInfoSpaceX] = useState([])


    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setInfoSpaceX(value))
    },[]);

    return(

        <div className = 'box' >
            {infoSpaceX.filter(item=> item.launch_year !== '2020').map((info,index)=><ComponentOfSpaceX
                key = {index}
                mission_name = {info.mission_name}
                launch_year={info.launch_year}
                mission_patch_small ={info.links.mission_patch_small}
            />)}
        </div>


    )
}

export default SpaceX;