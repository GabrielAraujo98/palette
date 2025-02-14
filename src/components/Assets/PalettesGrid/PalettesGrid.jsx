import React, { useEffect, useState } from 'react';
import styles from './PalettesGrid.css';
import { Link } from 'react-router-dom';
import CardColorPreview from '../CardColorPreview/CardColorPreview';

const PalettesGrid = ({allPalettes}) => {
    let samples = []
    let [palettes, setPalettes] = useState([])

     for (let i = 0; i < allPalettes.length; i++) {
        
        let colorsString = allPalettes[i][2].replace('{', '').replace('}', '')
        let colors = colorsString.split(',')
        
        samples.push(
          <CardColorPreview key={i} palette={colors} schemeLength={allPalettes[i][1]}/>
        )
      }

      useEffect(() => {
        setTimeout(() => {
          setPalettes(samples)
        }, 1)
      })

    return (
        <div className='palettes-grid'>
            {palettes}
        </div>
    )

}

export default PalettesGrid