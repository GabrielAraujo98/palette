import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class PaletteButton extends Component {

    render() {

        return (
            <div className='column is-2 has-text-centered'>
                <Link className="" to='/colorgenerator' >
                <button onClick={this.props.function} id={`button-${this.props.number}`}
                    value={this.props.number}>
                    <img src={this.props.image} alt={this.props.description}
                        className="preview sombreado" />
                    <div className='columns'>
                        <div className='column'>
                            <p className='tag is-danger is-medium sombreado is-rounded'>
                                {this.props.number} colors Palette
                            </p>
                        </div>
                    </div>
                </button>
                </Link>
            </div>
        )
    }
}
