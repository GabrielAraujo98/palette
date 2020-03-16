import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Palette.css'

import ColorSample from './components/ColorSample'
import Header from './components/Header'
import Routers from './Routers'


export default class Palette extends Component {

    state = {
        colors: [],
        palette: 3,
    }

    //Generate HexCode before the page open
    componentDidMount() {
        this.hexGenerator();
    }

    selectPaletteThree = () => {
        this.setState(({
            palette: 3
        }), () => {
            this.hexGenerator();
        });
    }
    selectPaletteFive = () => {
        this.setState({
            palette: 5
        }, () => {
            this.hexGenerator();
        });

    }

    //HexCode and Components Generator
    hexGenerator = () => {
        var code = []
        function getRandomArbitrary(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        }
        var choser = getRandomArbitrary(1, 4)
        console.log(choser); 
        for (var hex = 0; hex < this.state.palette; hex++) {
            var letters = '0123456789ABCDEF'.split('')
            var red = ''
            var green = ''
            var blue = ''
            var color = '#'

            if (choser === 1){
                               
                for (var r = 0; r < 2; r++) {
                    red += letters[Math.floor(Math.random() * 16)]
                }
                for (var g = 0; g < 2; g++) {
                    green += letters[Math.floor(Math.random() * 16)]
                }
                for (var b = 0; b < 2; b++) {
                    blue += letters[Math.floor(Math.random() * 16)]
                }
                color += red + green + red
            }

            if (choser === 2){
                for (var vm = 0; vm < 2; vm++) {
                    red += letters[Math.floor(Math.random() * 16)]
                }
                for (var vd = 0; vd < 2; vd++) {
                    green += letters[Math.floor(Math.random() * 16)]
                }
                for (var az = 0; az < 2; az++) {
                    blue += letters[Math.floor(Math.random() * 16)]
                }
                console.log(choser);
                color += red + red + blue
            }

            if (choser === 3){
                console.log(choser);
                for (var v = 0; v < 2; v++) {
                    red += letters[Math.floor(Math.random() * 16)]
                }
                for (var vr = 0; vr < 2; vr++) {
                    green += letters[Math.floor(Math.random() * 16)]
                }
                for (var a = 0; a < 2; a++) {
                    blue += letters[Math.floor(Math.random() * 16)]
                }
                color += red + blue + blue                
            }
            // color += red + green + red
            code.push(
                <ColorSample
                    column={`${this.state.palette}`}
                    class='column' key={hex} hexCode={color} />
            )
        }
        this.setState({ colors: code })
    }

    render() {

        return (
            <div>
                <Header function={this.hexGenerator} />
                <Routers colors={this.state.colors}
                    selectFunctionThree={this.selectPaletteThree}
                    selectFunctionFive={this.selectPaletteFive}
                />
            </div>
        )
    }
}
