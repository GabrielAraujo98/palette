import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h1 className='title has-text-centered has-text-danger'>
                    404
                </h1>
                <p className='subtitle is-3 has-text-centered has-text-black'>
                    Ops! This page can't be found.
                </p>
            </div>
        )
    }
}
