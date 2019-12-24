import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import RefreshButton from './RefreshButton'
import Logo from './img/palette-logo.png'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src={Logo} width="112" height="28" alt='Palette Logo' />
                        </a>

                        <a role="button" className="navbar-burger burger" aria-label="menu"
                            aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className="navbar-item" to={this.props.home} >
                                Select your Palette
                            </Link>
                            <Link className="navbar-item" to={this.props.palette}>
                                Generator
                            </Link>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <RefreshButton function={this.props.function} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        )
    }
}
