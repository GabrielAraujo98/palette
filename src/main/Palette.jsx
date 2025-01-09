import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Palette.css'

import ColorSample from './components/ColorSample'
import Routers from './Routers'


export default class Palette extends Component {

    state = {
        colors: [],
        palette: 3,
        variations: ['default', 'pastel', 'soft', 'light', 'hard', 'pale'],
        schemes: ['mono', 'contrast', 'triade', 'tetrade', 'analogic'],
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
        
        function setRandomValue(max) {
            return Math.floor(Math.random() * max);
        }

        let hue = setRandomValue(360);
        let ColorScheme = require('color-scheme');
        
        let scheme = new ColorScheme;
        scheme.from_hue(hue)
            // .scheme(this.schemes[setRandomValue(5)])
            .scheme(this.state.schemes[2])
            .variation(this.state.variations[setRandomValue(6)])
            .distance(Math.random())
        let colors = scheme.colors();

        let code = []
        for (let hex = 0; hex < this.state.palette; hex++) {
            let color = []
            switch(this.state.palette){
                case 3:
                    switch(hex){
                        case 0:
                            color.push('#'+colors[0 + setRandomValue(3)])
                        break;
                        case 1:
                            color.push('#'+colors[4 + setRandomValue(3)])
                        break;
                        case 2:
                            color.push('#'+colors[8 + setRandomValue(3)])
                        break;
                    }
                    break;
                case 5:
                    switch(hex){
                        case 0:
                            color.push('#'+colors[0])
                        break;
                        case 1:
                            color.push('#'+colors[1 + setRandomValue(3)])
                        break;
                        case 2:
                            color.push('#'+colors[4])
                        break;
                        case 3:
                            color.push('#'+colors[5 + setRandomValue(3)])
                        break;
                        case 4:
                            color.push('#'+colors[8 + setRandomValue(3)])
                        break;
                        // case 5:
                        //     color.push('#'+colors[9])
                        // break;
                    }
                    break;
            }
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
                <Routers colors={this.state.colors}
                    function={this.hexGenerator}
                    selectFunctionThree={this.selectPaletteThree}
                    selectFunctionFive={this.selectPaletteFive}
                >
                </Routers>
            </div>
        )
    }
}
