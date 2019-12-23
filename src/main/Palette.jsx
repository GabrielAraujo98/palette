import React, { Component } from 'react'

import './Palette.css'

import ColorSample from './components/ColorSample'

import ColorGenerator from './generator/ColorGenerator'
import Header from './components/Header'


export default class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = { colors: [] };
    }

    //Generate HexCode before the page open
    componentDidMount(){
        this.hexGenerator();
    }

    //HexCode and Components Generator
    hexGenerator = () => {
        var children = []
        // children.push( <RefreshButton key='button' function={this.hexGenerator} />)
        for (var h = 0; h < 3 ; h++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            children.push(<ColorSample column={`${h}`} class='column' key={h} style={color} />)
        } 
        this.setState({colors: children})
    }  

    render() {
        return (
            <div>                
                <Header function={this.hexGenerator}/>
                <ColorGenerator colors={this.state.colors}/>
            </div>
        )
    }
}
