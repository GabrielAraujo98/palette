import React, { Component } from 'react'

export default class PaletteSelctor extends Component {
    render() {
        return (
            <div>
                <h1 className='title is-1 has-text-centered has-text-danger'>Welcome to Palette!</h1>
                <p className='subtitle is-3 has-text-centered has-text-black'>Select the your Palette size:</p>
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-white sombreado">
                        <p class="">Vertical...</p>
                    </article>
                </div>
            </div>
        )
    }
}
