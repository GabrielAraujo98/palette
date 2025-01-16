import React, { Component } from 'react'
import Header from '../components/Header'
export default class ColorGenerator extends Component {    

    render() {
        return (
            <div>
                <Header function={this.props.function}/>      
                <div className='columns'>      
                {
                    this.props.colors
                }
                </div>
            </div>
        );
    }
}
