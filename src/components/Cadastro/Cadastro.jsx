import React from 'react';
import styles from './Cadastro.css';
import BackgroundImage from '../../main/components/img/banner-cadastro.png'
import { Link } from 'react-router-dom';
import MatchMediaWrapper from '../../mediaMatcher/mediaMatcher'
import Logo from '../../main/components/img/palette-logo.png'
import apiService from '../../services/apiServices';

export default class Cadastro extends React.Component {

  constructor(props){
    super(props);
    this.state = {};

    this.state.emailValue = '';
    this.state.passwordValue = '';
    this.state.userValue = '';
    this.state.confirmPasswordValue = '';
    this.state.response = '';
    this.state.loading = true;
    this.state.error = null;
    this.state.canContinue = false;
  }

  handleEmailChange(event){
      this.setState(prevState => {return prevState, this.state.emailValue = event.target.value});
    };
  
    handlePasswordChange(event){
      this.setState(prevState => {return prevState, this.state.passwordValue = event.target.value});
    }

    handleUserChange(event){
      this.setState(prevState => {return prevState, this.state.userValue = event.target.value});
    };
  
    handleConfirmPasswordChange(event){
      this.setState(prevState => {return prevState, this.state.confirmPasswordValue = event.target.value});
    };

    handleCadastro(){
      if(this.state.passwordValue === this.state.confirmPasswordValue && this.state.passwordValue !== ''){
        apiService
          .createUser(this.state.userValue, this.state.emailValue, this.state.passwordValue)
          .then(data => {
            console.log(data);
            window.location.pathname = "/login"
          }
          )
          .catch(error => {
            this.setState(prevState => {return prevState, this.state.error= error.message, this.state.loading= false });
          });
      }
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
        <h2>Olá! as paletas,<br/>te esperam!</h2>
        <div className="form-cadastro-mobile">
          <div className="form">
              <h3 className='h3-mobile'>Criar Conta</h3>
              <div>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='exemplo@email.com' value={this.state.emailValue} onChange={this.handleEmailChange.bind(this)}/>
              </div>
              <div>
                <label htmlFor="">Usuário</label>
                <input type="text" placeholder='exemplo123' value={this.state.userValue} onChange={this.handleUserChange.bind(this)}/>
              </div>
              <div>
                <label htmlFor="">Senha</label>
                <input type="password" placeholder='Mínimo de 8 caracteres' value={this.state.passwordValue} onChange={this.handlePasswordChange.bind(this)}/>
              </div>
              <div>
                <label htmlFor="">Confirmar senha</label>
                <input type="password" placeholder='' value={this.state.confirmPasswordValue} onChange={this.handleConfirmPasswordChange.bind(this)}/>
              </div>
              <div className="actions-mobile">
                <Link className="button" onClick={this.handleCadastro.bind(this)}>Criar Conta</Link>
                <p className="new-here">Já possúi uma conta? <Link to='/login'>Entre aqui!</Link></p>
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
              <input type="email" placeholder='exemplo@email.com' value={this.state.emailValue} onChange={this.handleEmailChange.bind(this)}/>
            </div>
            <div>
              <label htmlFor="">Usuário</label>
              <input type="text" placeholder='exemplo123' value={this.state.userValue} onChange={this.handleUserChange.bind(this)}/>
            </div>
            <div>
              <label htmlFor="">Senha</label>
              <input type="password" placeholder='Mínimo de 8 caracteres' value={this.state.passwordValue} onChange={this.handlePasswordChange.bind(this)}/>
            </div>
            <div>
              <label htmlFor="">Confirmar senha</label>
              <input type="password" placeholder='' value={this.state.confirmPasswordValue} onChange={this.handleConfirmPasswordChange.bind(this)}/>
            </div>
            <div className="actions">
              <Link className="button" onClick={this.handleCadastro.bind(this)}>Criar Conta</Link>
              <p className="new-here">Já possúi uma conta? <Link to='/login'>Entre aqui!</Link></p>
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