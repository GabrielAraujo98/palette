import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './../components/Login'
import Cadastro from './../components/Cadastro'
import ColorGenerator from './generator/ColorGenerator'
import PaletteSelctor from './selector/PaletteSelctor'
import PaletteSugestions from '../components/PaletteSugestions/PaletteSugestions';
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
                        <Route exact path="/colorgenerator" element={<ColorGenerator function={this.props.function} colors={this.props.colors} />}/>
                        <Route exact path="/*" element={<PaletteSugestions function={this.props.function}/>}/>
                        <Route exact path="/home" element={<PaletteSugestions function={this.props.function}/>}/>
                    </Routes>
                    </div>
                </Router>
            )
    }
}