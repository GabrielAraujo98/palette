import React, { Component } from 'react'

import 'font-awesome/css/font-awesome.min.css'

export default class RefreshButton extends Component {
    render() {
        return (
            <div>
                <a type='button' className='button is-rounded' href='/'>
                    <i className="fa fa-refresh has-text-primary"></i>
                </a>
            </div>
        )
    }
}
