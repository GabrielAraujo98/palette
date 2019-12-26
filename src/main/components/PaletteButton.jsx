import React, { Component } from 'react'

export default class PaletteButton extends Component {

    render() {
        return (
            <div className='column is-2 has-text-centered'>
                <button onClick={this.props.function} id={`button-${this.props.number}`}
                    value={this.props.number}>
                    <img src={this.props.image} alt={this.props.description}
                        className="preview sombreado" />
                    <div className='columns'>
                        <div className='column'>
                            <p className='tag is-danger is-medium sombreado'>
                                {this.props.number} colors Palette
                            </p>
                        </div>
                    </div>
                </button>
            </div>
        )
    }
}
