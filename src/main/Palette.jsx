import React, { Component } from 'react'

import './Palette.css'

import ColorGenerator from './generator/ColorGenerator'
import RefreshButton from './components/RefreshButton'


export default class Palette extends Component {
    render() {
        return (
            <div className='cell-phone'>
                <RefreshButton />
                <ColorGenerator />
            </div>
        )
    }
}
