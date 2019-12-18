import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get("/friends")
        .then(res => {
            console.log(res)
        })
    },[])

    return (
        <div>
            Info
        </div>
    )
}



export default FriendList;