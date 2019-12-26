import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ColorGenerator from './generator/ColorGenerator'
import PaletteSelctor from './selector/PaletteSelctor'
import NotFound from './notFound/NotFound'


export default class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/palette/">
                    <PaletteSelctor
                        functionThree={this.props.selectFunctionThree}
                        functionFive={this.props.selectFunctionFive}
                    />
                </Route>
                <Route path="/colorgenerator">
                    <ColorGenerator colors={this.props.colors} />
                </Route>
                <Route path="/*">
                <Redirect path="/palette/" />
                </Route>
            </Switch>
        )
    }
}