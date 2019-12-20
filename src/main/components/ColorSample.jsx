import React, { Component } from 'react'

export default class ColorSample extends Component {

    render() {
        return (
            <section className={`hero`} style={{ backgroundColor: this.props.style }}>
                <div className='hero-body'>
                    <span className='tags has-addons '>
                        <div className='tag is-medium is-rounded'>
                            Hex code:
                        </div>
                        <div className='tag is-medium title has-text-black is-rounded'>
                            {this.props.style}
                        </div>
                    </span>
                </div>
            </section>
        )
    }
}
