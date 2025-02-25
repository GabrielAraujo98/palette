import React, { useEffect, useState } from 'react';
import styles from './PalettesGrid.css';
import { Link } from 'react-router-dom';
import CardColorPreview from '../CardColorPreview/CardColorPreview';

const PalettesGrid = ({allPalettes}) => {
    let samples = []
    let [palettes, setPalettes] = useState([])
    let columns = [0, 1, 2, 3, 4, 5]
    let cols = columns

    for(let j = 0; j < columns.length; j++){

      for (let i = 0; i < allPalettes.length; i++) {
        let colorsString = allPalettes[i][2].replace('{', '').replace('}', '')
        let colors = colorsString.split(',')

        if((i) % (columns.length) == j){
          samples.push(<CardColorPreview key={i} palette={colors} schemeLength={allPalettes[i][1]}/>)
        }
      }

      cols[j] = <div className='grid-col'>{samples}</div>;
      samples = []
    }

      useEffect(() => {
        setTimeout(() => {
          setPalettes(cols)
        }, 1)
      })

    return (
        <div className='palettes-grid'>
            {palettes}
        </div>
    )

}

export default PalettesGrid