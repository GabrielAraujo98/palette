import React, { Component } from 'react'

import ColorSample from '../components/ColorSample'

export default class ColorGenerator extends Component {

    getRandomHex() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <div>
                <ColorSample color='white' style={this.getRandomHex()} />
                <ColorSample color='white' style={this.getRandomHex()} />
                <ColorSample color='white' style={this.getRandomHex()} />
                <ColorSample color='white' style={this.getRandomHex()} />
                <ColorSample color='white' style={this.getRandomHex()} />
            </div>
        )
    }
}
