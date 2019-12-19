import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import FriendsForm from "./FriendsForm";

const FriendList = () => {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth().get("/friends")
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log("ERROR!!!", err))
    },[])
    

    // const editFriend = e => {
    //     e.preventDefault();
        
    // }

    // const deleteFriend = e => {
    //     e.preventDefault();
        
    // }

    return (
        <div>
            <FriendsForm friends={friends} setFriends={setFriends}/>
            {friends.map(friend => (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>{`Age: ${friend.age} years old`}</p>
                    <p>{`Email: ${friend.email}`}</p>
                    {/* <button onClick={editFriend}>Edit</button>
                    <button onClick={deleteFriend}>Delete</button> */}
                </div>
            ))}
        </div>
    )
}

export default FriendList;