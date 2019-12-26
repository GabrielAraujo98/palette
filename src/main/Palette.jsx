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
            palette: 3,
            redirect: false
        }
    }

    //Generate HexCode before the page open
    componentDidMount() {
        this.hexGenerator();
    }

    selectPaletteThree = () => {
        console.log('three');
        this.setState({ palette: 3})
    }
    selectPaletteFive = () => {
        console.log('five');
        this.setState({ palette: 5})
    }

    //HexCode and Components Generator
    hexGenerator = () => {
        var code = []
        for (var c = 0; c < this.state.palette; c++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            code.push(
                <ColorSample
                    column={`${this.state.palette}`}
                    class='column' key={c} hexCode={color} />
            )
        }
        this.setState({ colors: code })
    }

    render() {

        return (
            <div>
                <Header function={this.hexGenerator}
                    palette='/colorgenerator' home='/' />
                <Routers colors={this.state.colors}
                    selectFunctionThree={this.selectPaletteThree}
                    selectFunctionFive={this.selectPaletteFive}
                />
            </div>
        )
    }
}
