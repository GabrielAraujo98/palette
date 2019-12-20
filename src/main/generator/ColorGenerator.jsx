import React, { Component } from 'react'

import ColorSample from '../components/ColorSample'
import RefreshButton from '../components/RefreshButton'


export default class ColorGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = { colors: [] };
    }

    componentDidMount(){
        this.hexGenerator();
    }

    hexGenerator = () => {
        var children = []
        children.push( <RefreshButton key='button' function={this.hexGenerator} />)
        for (var h = 0; h < 3; h++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            children.push(<ColorSample class='column is-4' key={h} style={color} />)
        } 
        this.setState({colors: children})
    }    

    render() {
        return (
            <div className='columns'>            
               {
                   this.state.colors
               }
            </div>
        );
    }
}
