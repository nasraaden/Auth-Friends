import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Friend from "./Friend";
import FriendsForm from "./FriendsForm";

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get("/friends")
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
    },[])

    return (
        <div>
            <FriendsForm friends={friends} setFriends={setFriends}/>
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    )
}



export default FriendList;