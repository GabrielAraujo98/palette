import React, { Component } from 'react'

export default class ColorSample extends Component {

    

    render() {
        return (
            <section className={`hero`} style={{backgroundColor: this.props.style}}>
                <div className='hero-body'>
                    <h1 className={`has-text-black tag is-white-ter is-medium`}>{this.props.style}</h1>
                </div>
            </section>
        )
    }
}
