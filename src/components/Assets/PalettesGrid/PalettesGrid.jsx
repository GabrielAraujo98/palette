import React, { useState, useEffect } from 'react';
import styles from './PalettesGrid.css';
import { Link } from 'react-router-dom';
import apiService from '../../../services/apiServices';
import CardColorPreview from '../CardColorPreview/CardColorPreview';

export default function PalettesGrid({allPalettes}) {

    const [allPalettesRecived, changeAllPalettes] = useState([])
    const [palettes, updatePalettes] = useState([])


    useEffect(() => {
        
            changeAllPalettes(allPalettes);
            let samples = []
            for (let i = 0; i < allPalettesRecived.length; i++) {
                let colorsString = allPalettesRecived[i][2].replace('{', '').replace('}', '')
                let colors = colorsString.split(',')
                
                samples.push(
                    <CardColorPreview key={i} palette={colors} schemeLength={allPalettesRecived[i][1]}/>
                )
            }
            updatePalettes(samples)
        })

    return (
        <div className='palettes-grid'>
            {palettes}
        </div>
    )

}