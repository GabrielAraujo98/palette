import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Palette.css'

import ColorSample from './components/ColorSample'
import Header from './components/Header'
import Routers from './Routers'


export default class Palette extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            colors: [],
            palette: 3 
        };
    }

    //Generate HexCode before the page open
    componentDidMount(){
        this.hexGenerator();
    }

    //HexCode and Components Generator
    hexGenerator = () => {
        var children = []
        for (var h = 0; h < this.state.palette ; h++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            children.push(<ColorSample column={`${this.state.palette}`} class='column' key={h} hexCode={color} />)
        } 
        this.setState({colors: children})
    }  

    render() {
        return (
            <div>                
                <Header function={this.hexGenerator} palette='/colorgenerator' home='/'/>
                <Routers colors={this.state.colors} />
            </div>
        )
    }
}
