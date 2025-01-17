import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './../components/Login'
import Cadastro from './../components/Cadastro'
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
                    <Routes>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/cadastro" element={<Cadastro/>}/>
                        <Route exact path="/palette/" element={<PaletteSelctor
                                functionThree={this.props.selectFunctionThree}
                                functionFive={this.props.selectFunctionFive}
                            />}/>
                        <Route path="/colorgenerator" element={<ColorGenerator function={this.props.function} colors={this.props.colors} />}/>
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