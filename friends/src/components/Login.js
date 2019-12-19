import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component{

    state = {
        credentials: {
          username: "",
          password: ""
        },
        isLoading: false
      };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    submitForm = e => {
        e.preventDefault();
        this.setState({
            isLoading: true
        });
        axiosWithAuth()
            .post("/login", this.state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload)
                this.props.history.push("/friends")
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="username" placeholder="Username" onChange={this.handleChange} 
                    value={this.state.credentials.username}/>
                    <input type="password" name="password" placeholder="Password" onChange={this.handleChange} 
                    value={this.state.credentials.password}/>
                    <button>Login</button>
                    {this.state.isLoading && "Logging In"}
                </form>
            </div>
        )
    }
}

export default Login;

