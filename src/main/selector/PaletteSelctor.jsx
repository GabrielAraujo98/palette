import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PaletteSelctor extends Component {
    render() {
        return (
            <div>
                <h1 className='title is-1 has-text-centered has-text-danger'>Welcome to Palette!</h1>
                <p className='subtitle is-3 has-text-centered has-text-black'>Select the your Palette size:</p>
                <div class="control has-text-centered">
                    <label class="radio">
                        <input type="radio" name="answer" />
                        3
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer" />
                        5
                    </label>
                </div>
                <Link to='/colorgenerator' className='button is-rounded is-danger'>Choose!</Link>
            </div>
        )
    }
}
