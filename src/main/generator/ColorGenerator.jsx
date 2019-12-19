import React, { Component } from 'react'

import ColorSample from '../components/ColorSample'

export default class ColorGenerator extends Component {
    render() {
        return (
            <div>
                <ColorSample color='black' hex='white-ter' />
                <ColorSample color='white' hex='primary' />
                <ColorSample color='white' hex='info' />
                <ColorSample color='white' hex='link' />
                <ColorSample color='white' hex='danger' />
            </div>
        )
    }
}
