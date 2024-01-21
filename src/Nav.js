import React, {Component} from "react"

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav-components">
                <button className="nav-btn btn btn-dark">Home</button>
                <button className="nav-btn btn btn-dark">Shop</button>
                <button className="nav-btn btn btn-dark">Visit Us</button>
            </nav>
        )
    }
}
