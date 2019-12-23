import React, { Component } from 'react'

export default class ColorGenerator extends Component {    

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
