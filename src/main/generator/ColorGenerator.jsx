import React, { Component } from 'react'

import ColorSample from '../components/ColorSample'
import RefreshButton from '../components/RefreshButton'


export default class ColorGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = { code: [] }
    }

    hexGenerator = () => {
        var hexCode = []
        for (var h = 0; h < 3; h++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            hexCode.push(color)
        }
        this.setState({ code: hexCode })
    }

    render() {
        return (
            <div>
                <RefreshButton function={this.hexGenerator} />
                <ColorSample style={this.state.code[0]} />
                <ColorSample style={this.state.code[1]} />
                <ColorSample style={this.state.code[2]} />
            </div>
        );
    }
}
