import React, { Component } from 'react'

import './Palette.css'

import ColorGenerator from './generator/ColorGenerator'
import Header from './components/Header'


export default class Palette extends Component {
    render() {
        return (
            <div>                
                <Header />
                <ColorGenerator />
            </div>
        )
    }
}
