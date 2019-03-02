import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AppNavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        ClientPanel
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse0"
                        data-target="#navbarMain"
                    >
                        <spna className="navber-toggler-icon"></spna>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMain">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default AppNavBar;
