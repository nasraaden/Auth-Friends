import React, {useState, useEffect} from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsForm = () => {
    const [newFriend, setNewFriend] = useState({name: "", age: "", email: ""})

    const handleChange = e => {
        e.preventDefault();
        setNewFriend({...newFriend, [e.target.name]: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        
    }

        return(
            <div>
                <form>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                    <input type="text" name="age" placeholder="Age" onChange={handleChange}/>
                    <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    
}

export default FriendsForm;