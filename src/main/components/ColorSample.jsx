import React, { Component } from 'react'

export default class ColorSample extends Component {

    render() {
        return (
            <section className='' style={{ backgroundColor: this.props.hexCode}}>
                <div className={`hero-body column-${this.props.column}`}>
                    <span className='tags has-addons'>
                        <div className='tag is-medium has-text-black has-background-white'>
                            Hex code:
                        </div>
                        <div className='tag is-medium title has-text-black is-rounded has-background-white'>
                            {this.props.hexCode}
                        </div>
                    </span>
                </div>
            </section>
        )
    }
}
