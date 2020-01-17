import React, { Component } from 'react'

import PreviewThree from './img/tile-palette-3.png'
import PreviewFive from './img/tile-palette-5.png'

import PaletteButton from '../components/PaletteButton'

export default class PaletteSelector extends Component {

    render() {
        return (
            <div>
                <h1 className='title has-text-centered' style={{ color: "#45E79C" }} >
                    Welcome to Palette!
                </h1>
                <p className='subtitle is-3 has-text-centered has-text-black'>
                    Select your Palette size:
                </p>
                <div className='columns is-centered'>
                    <PaletteButton number={3} image={PreviewThree}
                        function={this.props.functionThree} />

                    <PaletteButton number={5} image={PreviewFive}
                        function={this.props.functionFive} />
                </div>
            </div>
        )
    }
}