import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
export default class ColorGenerator extends Component {    

    render() {
        return (
            <div>
                <Navbar/>      
                <div className='columns'>      
                {
                    this.props.colors
                }
                </div>
            </div>
        );
    }
}
