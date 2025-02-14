import React, { Component } from 'react';
import styles from './CardColorPreview.css';
import { Link } from 'react-router-dom';

const CardColorPreview = ({palette, schemeLength}) => {
    let state = {
        palette: palette,
        colors: [],
        schemeLength: schemeLength,
        sampleHeight: '',
    }
    let samples = []

    switch(state.schemeLength){
        case 4:
            state.cardHeight = '240px'
        break;
        case 6:
            state.cardHeight = '360px'
        break;
        case 8:
            state.cardHeight = '480px'
        break;
    }
    
    for (let i = 0; i < state.palette.length; i++) {
        samples.push(
            <div key={i} className='color-sample' style={{backgroundColor: `#${state.palette[i]}`}}></div>
        )
    }
    state.colors = samples

    return (
        <div className='color-card' style={{'height': `${state.cardHeight}`,borderTop: `2px solid #${state.palette[0]}44`, borderLeft: `2px solid #${state.palette[0]}44`, borderBottom: `2px solid #${state.palette[0]}cc`, borderRight: `2px solid #${state.palette[0]}cc`}}>
            {state.colors}
        </div>
    )
}

export default CardColorPreview