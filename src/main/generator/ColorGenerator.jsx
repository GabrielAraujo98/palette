import React, { Component } from 'react'

// import ColorSample from '../components/ColorSample'
// import RefreshButton from '../components/RefreshButton'


export default class ColorGenerator extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { colors: [] };
    // }

    // //Generate HexCode before the page open
    // componentDidMount(){
    //     this.hexGenerator();
    // }

    // //HexCode and Components Generator
    // hexGenerator = () => {
    //     var children = [1]
    //     // children.push( <RefreshButton key='button' function={this.hexGenerator} />)
    //     for (var h = 0; h < 3 ; h++) {
    //         var letters = '0123456789ABCDEF'.split('');
    //         var color = '#';
    //         for (var i = 0; i < 6; i++) {
    //             color += letters[Math.floor(Math.random() * 16)];
    //         }
    //         children.push(<ColorSample column={`${h}`} class='column' key={h} style={color} />)
    //     } 
    //     console.log(children);
    //     this.setState({colors: children})
    //     console.log(children);
    // }    

    render() {
        return (
            <div className='columns'>            
               {
                   this.props.colors
               }
            </div>
        );
    }
}
