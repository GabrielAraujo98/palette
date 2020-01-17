import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import RefreshButton from './RefreshButton'
import Logo from './img/palette-logo.png'

export default class Header extends Component {

    constructor(props) {
        super(props)

        this.isActive = this.isActive.bind(this)
        this.state = {
            class: ''
        }
    }

    //Add or Remove class '.is-active' to the 'a' burger and '#navbarBasicExemple' 
    isActive() {
        if (this.state.class === '') {
            this.setState({ class: 'is-active' })
        } else {
            this.setState({ class: '' })
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <span className="navbar-item">
                            <Link className="navbar-item" to='/palette/'>
                                <img src={Logo} width="112" height="28" alt='Palette Logo' />
                            </Link>
                        </span>
                    </div>

                    <div onClick={this.isActive}
                        className={`navbar-menu ${this.state.class}`}>
                        <div className="navbar-start">
                            <Link className="navbar-item" to='/palette/' >
                                Select your Palette
                            </Link>
                            <Link className="navbar-item" to='/colorgenerator'>
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
