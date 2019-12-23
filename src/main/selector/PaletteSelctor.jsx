import React, { Component } from 'react'

import PreviewThree from './img/tile-palette-3.png'
import PreviewFive from './img/tile-palette-5.png'


export default class PaletteSelctor extends Component {
    render() {
        return (
            <div>
                <h1 className='subtitle has-text-centered has-text-danger'>Welcome to Palette!</h1>
                <p className='subtitle is-3 has-text-centered has-text-black'>Select the your Palette size:</p>
                <div className='columns is-centered'>
                    <div className='column is-2 has-text-centered'>
                        <button id='button-3' key={3} onClick={this.selectPalette} href='/colorgenerator'>
                            <img src={PreviewThree} alt='Preview three' className="preview sombreado" />
                            <div className='columns'>
                                <div className='column'>
                                    <p className='tag is-danger is-medium sombreado'>3 colors Palette</p>
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className='column is-2 has-text-centered'>
                        <button id='button-5' key={5} onClick={this.selectPalette} to='/colorgenerator'>
                            <img src={PreviewFive} alt='Preview Five' className="preview sombreado" />
                            <div className='columns'>
                                <div className='column'>
                                    <p className='tag is-danger is-medium sombreado'>5 colors Palette</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
