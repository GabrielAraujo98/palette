import React, { Component } from 'react'

import './Palette.css'

import ColorGenerator from './generator/ColorGenerator'


export default class Palette extends Component {
    render() {
        return (
                <ColorGenerator />
        )
    }
}
