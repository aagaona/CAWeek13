import React, {Component} from "react";

export default class Login extends Component {
    render() {
        return (
        <div className="card">
            <h3>Log In</h3>
            <br />
            <label>
                Username: 
                <input name="username" placeholder="Enter your Username" />
            </label>
            <hr />
            <label>
                Password: 
                <input name="username" placeholder="Enter your Password" type="password" />
            </label>
            <br />
            <button className="Loginbtn btn btn-dark">Login</button>
        </div>
        )
    };
};