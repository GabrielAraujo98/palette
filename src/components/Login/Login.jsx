import React from 'react';
import styles from './Login.css';
import BackgroundImage from '../../main/components/img/banner-login.png'
import { Link } from 'react-router-dom';
import MatchMediaWrapper from '../../mediaMatcher/mediaMatcher'
import Logo from '../../main/components/img/palette-logo.png'
import LogoIcon from '../../main/components/img/palette-icon.png'
import apiService from '../../services/apiServices';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {};

    this.state.emailValue = '';
    this.state.passwordValue = '';
    this.state.response = '';
    this.state.loading = true;
    this.state.error = null;
    this.state.canContinue = false;
    this.pathTo = null;
  }

  handleEmailChange(event){
    this.setState(prevState => {return prevState, this.state.emailValue = event.target.value});
  };

  handlePasswordChange(event){
    this.setState(prevState => {return prevState, this.state.passwordValue = event.target.value});
  };

  handleLogin() {
    // Usando o serviço para buscar dados da API
    console.log(this.state.emailValue, this.state.passwordValue);
    
      apiService
        .getUserByEmail(this.state.emailValue, this.state.passwordValue)
        .then(data => {
          this.setState(prevState => {return prevState, this.state.response = 'ok', this.state.loading = false });
          window.location.pathname = "/palette"
        })
        .catch(error => {
          alert('Usuário ou senha inválidos')
          this.setState(prevState => {return prevState, this.state.error= error.message, this.state.loading= false });
        });
      
  }
  
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
        <h2>Seja bem-vindo,<br/>novamente!</h2>
        <div className="form-login-mobile">
          <div className="form">
            <div>
              <label htmlFor="">Email/Usuário</label>
              <input type="email" placeholder='exemplo@email.com' value={this.state.emailValue} onChange={this.handleEmailChange.bind(this)}/>
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" placeholder='********' value={this.state.passwordValue} onChange={this.handlePasswordChange.bind(this)}/>
              <p><a href="#">Esqueceu a senha?</a></p>
            </div>
            <div className="actions">
              <Link className="button" onClick={this.handleLogin.bind(this)}>Login</Link>
              <p className="new-here">Novo por aqui? <Link to="/cadastro">Cadastre-se!</Link></p>
            </div>
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
              <input type="email" placeholder='exemplo@email.com' value={this.state.emailValue} onChange={this.handleEmailChange.bind(this)}/>
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" placeholder='********' value={this.state.passwordValue} onChange={this.handlePasswordChange.bind(this)}/>
              <p><a href="#">Esqueceu a senha?</a></p>
            </div>
            <div className="actions">
              <Link className="button" onClick={this.handleLogin.bind(this)}>Login</Link>
              <p className="new-here">Novo por aqui? <Link to="/cadastro">Cadastre-se!</Link></p>
            </div>
          </div>
        </div>
      </div>
    )

    return <MatchMediaWrapper mobileContent={mobileContent} desktopContent={desktopContent}/>
  }
}

