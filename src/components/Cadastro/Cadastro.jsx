import React from 'react';
import styles from './Cadastro.css';
import BackgroundImage from '../../main/components/img/banner-cadastro.png'
import { Link } from 'react-router-dom';
import MatchMediaWrapper from '../../mediaMatcher/mediaMatcher'
import Logo from '../../main/components/img/palette-logo.png'

export default class Cadastro extends React.Component {
  render() {
    const mobileContent = (
      <div className="form-page-mobile">
      <div className="banner-mobile">
        <div className='bg-container'>
          <img className="bg-image-mobile" src={BackgroundImage} />
        </div>
      </div>
      <div className='center'>
        <img className="logo" src={Logo} />
        <h2>Olá! as paletas,<br/>te esperam!</h2>
        <div className="form-cadastro-mobile">
          <div className="form">
              <h3 className='h3-mobile'>Criar Conta</h3>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='exemplo@email.com'/>
              </div>
              <div>
                <label htmlFor="">Usuário</label>
                <input type="text" placeholder='exemplo123'/>
              </div>
              <div>
                <label htmlFor="">Senha</label>
                <input type="password" placeholder='Mínimo de 8 caracteres'/>
              </div>
              <div>
                <label htmlFor="">Confirmar senha</label>
                <input type="password" placeholder=''/>
              </div>
              <div className="actions-mobile">
                <Link className="button" to='/login'>Criar Conta</Link>
                <p className="new-here">Já possúi uma conta? <a href='#'>Entre aqui!</a></p>
              </div>
          </div>
        </div>
      </div>
    </div>
    )
    const desktopContent = (
      <div className="form-page">
        <div className="form-cadastro">
          <div className="form">
            <h3>Criar Conta</h3>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" placeholder='exemplo@email.com'/>
            </div>
            <div>
              <label htmlFor="">Usuário</label>
              <input type="text" placeholder='exemplo123'/>
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" placeholder='Mínimo de 8 caracteres'/>
            </div>
            <div>
              <label htmlFor="">Confirmar senha</label>
              <input type="password" placeholder=''/>
            </div>
            <div className="actions">
              <Link className="button" to='/login'>Criar Conta</Link>
              <p className="new-here">Já possúi uma conta? <a href='#'>Entre aqui!</a></p>
            </div>
          </div>
        </div>
        <div className="banner">
          <img className="bg-image" src={BackgroundImage} />
          <img className="logo-desktop" src={Logo} />
          <h2>Olá!<br/>As paletas<br/>te esperam!</h2>
        </div>
      </div>
    )

    return <MatchMediaWrapper mobileContent={mobileContent} desktopContent={desktopContent}/>
  }
}