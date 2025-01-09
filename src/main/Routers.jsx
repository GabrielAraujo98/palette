import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import ColorGenerator from './generator/ColorGenerator'
import PaletteSelctor from './selector/PaletteSelctor'

export default class Routers extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div>
                <Header function={this.props.function} />
                <Routes>
                    <Route exact path="/palette/" element={<PaletteSelctor
                            functionThree={this.props.selectFunctionThree}
                            functionFive={this.props.selectFunctionFive}
                        />}/>
                    <Route path="/colorgenerator" element={<ColorGenerator colors={this.props.colors} />}/>
                    <Route exact path="/*" element={<PaletteSelctor
                            functionThree={this.props.selectFunctionThree}
                            functionFive={this.props.selectFunctionFive}
                        />}/>
                </Routes>
                </div>
            </Router>
        )
    }
}