import React, { Component } from 'react'

import RefreshButton from './RefreshButton'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt='Palette Logo' />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/">
                                Select your Palette
                            </a>
                            <a className="navbar-item" href="/">
                                Generator
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href='/'>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                            <div className="buttons">
                                <RefreshButton function={this.hexGenerator} />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
