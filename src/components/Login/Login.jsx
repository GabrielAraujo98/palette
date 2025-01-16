import React, { useEffect } from 'react';
import styles from './Login.css';
import BackgroundImage from '../../main/components/img/banner-login.png'
import { Link } from 'react-router-dom';
import MatchMediaWrapper from '../../mediaMatcher/mediaMatcher'
import Logo from '../../main/components/img/palette-logo.png'
import LogoIcon from '../../main/components/img/palette-icon.png'

export default class Login extends React.Component {
  
  state = {
    pathName: '/login',
  }

  onClickLogin = () => {
    this.setState(({
      pathName: '/palette'
    }))
  }

  render() {
    const mobileContent = (
      <div className="form-page-mobile">
      <div className="banner-mobile">
        <div className='bg-container'>
          <img className="bg-image-mobile" src={BackgroundImage} />
        </div>
        <img className="logo" src={Logo} />
        <h2>Seja bem-vindo,<br/>novamente!</h2>
      </div>
      <div className="form-login-mobile">
        <div className="form">
          <div>
            <label htmlFor="">Email/Usuário</label>
            <input type="email" placeholder='exemplo@email.com'/>
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder='********'/>
            <p><a href="#">Esqueceu a senha?</a></p>
          </div>
          <div className="actions">
            <Link className="button" to='/palette' onClickLogin={this.onClickLogin}>Login</Link>
            <p className="new-here">Novo por aqui? <a href='#'>Cadastre-se!</a></p>
          </div>
        </div>
      </div>
    </div>
    )
    const desktopContent = (
      <div className="form-page">
        <div className="banner">
          <img className="bg-image" src={BackgroundImage} />
          <img className="logo-icon" src={LogoIcon} />
          <h2>Seja<br/>bem-vindo,<br/>novamente!</h2>
        </div>
        <div className="form-login">
          <div className="form">
            <h3>Login</h3>
            <div>
              <label htmlFor="">Email/Usuário</label>
              <input type="email" placeholder='exemplo@email.com'/>
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" placeholder='********'/>
              <p><a href="#">Esqueceu a senha?</a></p>
            </div>
            <div className="actions">
              <Link className="button" to='/palette' onClickLogin={this.onClickLogin}>Login</Link>
              <p className="new-here">Novo por aqui? <a href='#'>Cadastre-se!</a></p>
            </div>
          </div>
        </div>
      </div>
    )

    return <MatchMediaWrapper mobileContent={mobileContent} desktopContent={desktopContent}/>
  }
}

