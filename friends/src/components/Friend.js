import React from "react";

const Friend = props => {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <p>{`Age: ${props.friend.age} years old`}</p>
            <p>{`Email: ${props.friend.email}`}</p>
        </div>
    )
}

export default Friend;