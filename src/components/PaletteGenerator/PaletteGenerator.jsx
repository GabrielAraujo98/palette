import React, { useEffect, useState } from 'react';
import styles from './PaletteGenerator.css';
import Navbar from '../../components/Navbar'
import 'font-awesome/css/font-awesome.min.css'

const PalettesGenerator = () => {
    return(
        <div>
            <Navbar/>
            <div className='wrapper'>
                <div className='colors-display'>
                    <div className='color' style={{backgroundColor: '#15A9EF'}}>
                        <div className='flag lock locked'>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className='flag hex'>
                            #000000
                        </div>
                    </div>
                    <div className='color' style={{backgroundColor: '#E38CB6'}}>
                        <div className='flag lock'>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className='flag hex'>
                            #000001
                        </div>
                    </div><div className='color' style={{backgroundColor: '#FFC188'}}>
                        <div className='flag lock'>
                            <i className="fa fa-lock"></i>
                        </div>
                        <div className='flag hex'>
                            #000002
                        </div>
                    </div>
                </div>
                <div className='actions'>
                    <div className='generator-actions'>
                        <div className='gen-wrapper'>
                            <button className='change-scheme'>Alterar Caracteristicas<i className='fa fa-caret-up'></i></button>
                            <button className='refresh'><i className='fa fa-refresh'></i></button>
                        </div>
                        <div className='gen-actions-modal'>
                            <div>
                                <label htmlFor="">Esquema</label>
                                <input type="number" name="" id="" placeholder='Triade'/>
                            </div>
                            <div>
                                <label htmlFor="">Variação</label>
                                <input type="number" name="" id="" placeholder='Soft'/>
                            </div>
                            <div>
                                <label htmlFor="">Cor base</label>
                                <input type="number" name="" id="" placeholder='Blue'/>
                            </div>
                        </div>
                    </div>
                    <div className='generator-save'>
                        <div className='gen-wrapper'>
                            <input type="text" placeholder='Nome da sua paleta'/> 
                            <button className='save-palette'>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PalettesGenerator;