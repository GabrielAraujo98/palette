import React from 'react';
import styles from './PaletteSugestions.css';
import { Link } from 'react-router-dom';
import MatchMediaWrapper from '../../mediaMatcher/mediaMatcher';
import apiService from '../../services/apiServices';
import CardColorPreview from '../Assets/CardColorPreview/CardColorPreview'
import PalettesGrid from '../Assets/PalettesGrid/PalettesGrid';
import Header from '../../main/components/Header';
export default class PaletteSugestions extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }

    this.state.colors = [];
    this.state.schemes = ['mono', 'contrast', 'triade', 'tetrade', 'analogic'];
    this.state.variations = ['default', 'pastel', 'soft', 'light', 'hard', 'pale'];
    this.state.variation = this.state.variations[0]
    this.state.scheme = this.state.schemes[2]
    this.state.palettes = []

    apiService
    .getSugestedPalettes()
    .then(data => {
      data.palettes.map(palette => {
        this.state.palettes.push(palette)
      });
    }
    )
    .catch(error => {
      console.log(error);
    });
  }
  
  createSugestedPalette(){
    let ColorScheme = require('color-scheme');
    let colorScheme = new ColorScheme;
    colorScheme.from_hue(0)
        .scheme(this.state.scheme)
        .variation(this.state.variation)

    // this.state.colors = scheme.colors();

    this.state.colors.push(colorScheme.colors()[1])
    this.state.colors.push(colorScheme.colors()[2])
    this.state.colors.push(colorScheme.colors()[3])
    this.state.colors.push(colorScheme.colors()[5])
    this.state.colors.push(colorScheme.colors()[6])
    this.state.colors.push(colorScheme.colors()[7])

    console.log(this.state.colors);
    
    
    // apiService
    //     .createSugestedPalette(6, this.state.colors, this.state.scheme, this.state.variation)
    //     .then(data => {
    //       console.log(data);
    //       this.state.colors = []
    //     }
    //     )
    //     .catch(error => {
    //       console.log(error);
    //     });

     
  }

  render() {
    const mobileContent = (
      <div>
        <Header function={this.props.function}/>      
        <PalettesGrid allPalettes={this.state.palettes}/>
      </div>
    )
    const desktopContent = (
      <div>
        <Header function={this.props.function}/>      
        <PalettesGrid allPalettes={this.state.palettes}/>
      </div>
    )
    return <MatchMediaWrapper mobileContent={mobileContent} desktopContent={desktopContent}/>
  
  }
}