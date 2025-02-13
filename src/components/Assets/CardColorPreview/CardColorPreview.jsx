import React, { Component } from 'react';
import styles from './CardColorPreview.css';
import { Link } from 'react-router-dom';

export default function CardColorPreview({palette, schemeLength}) {
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
            <div key={i} className='color-sample' style={{'background-color': `#${state.palette[i]}`}}></div>
        )
    }
    state.colors = samples

    return (
        <div className='color-card' style={{'height': `${state.cardHeight}`,'border-top': `2px solid #${state.palette[0]}44`, 'border-left': `2px solid #${state.palette[0]}44`, 'border-bottom': `2px solid #${state.palette[0]}cc`, 'border-right': `2px solid #${state.palette[0]}cc`}}>
            {state.colors}
        </div>
    )
}