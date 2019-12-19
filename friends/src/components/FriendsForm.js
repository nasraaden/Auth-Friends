import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsForm extends React.Component {
    // const [newFriend, setNewFriend] = useState({id: Date.now(), name: "", age: "", email: ""})
    state = {
        newFriend: {
            id: Date.now(),
            name: "", 
            age: "", 
            email: ""
        }
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            newFriend: {
                ...this.state.newFriend, 
                [e.target.name]: e.target.value
            }
        })
    }

    addFriend = () => {
        axiosWithAuth()
            .post("/friends", this.state.newFriend)
            .then(res => {
                console.log(res)
                this.setState({
                    friends: [
                        ...res.data, 
                        res.data.payload
                    ]
                })
            })
            .catch(err => console.log("ERROR!!!", err))
            this.setState({newFriend: {name: "", age: "", email: ""}})
    }

    // componentDidMount() {
    //     this.addFriend()
    // }

        render() {

            return(
                <div>
                    <form>
                        <input type="text" name="name" placeholder="Name" onChange={this.handleChange} value={this.state.newFriend.name}/>
                        <input type="text" name="age" placeholder="Age" onChange={this.handleChange} value={this.state.newFriend.age}/>
                        <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.newFriend.email}/>
                        <button onClick={this.addFriend}>Add Friend</button>
                    </form>
                </div>
            )
        }
}

export default FriendsForm;