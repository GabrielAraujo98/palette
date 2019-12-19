import React, { Component } from 'react'

export default class ColorSample extends Component {

    getRandomHex() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        return (
            <section className={`hero`} style={{backgroundColor: this.getRandomHex()}}>
                <div className='hero-body'>
                    <h1 className={`has-text-${this.props.color}`}>{this.getRandomHex()}</h1>
                </div>
            </section>
        )
    }
}
