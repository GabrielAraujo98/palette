import React, { Component } from 'react'

import 'font-awesome/css/font-awesome.min.css'

// import { hexGenerator, getRandomHex } from '../functions/hexGenerator'

export default class RefreshButton extends Component {

    render() {
        return (
            <div>
                <button id='refresh' type='button' className='button is-rounded'
                    onClick={this.props.function} >
                    <i className="fa fa-refresh has-text-info"></i>
                </button>
            </div>
        )
    }
}
