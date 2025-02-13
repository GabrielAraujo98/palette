import React, { useState, useEffect } from 'react'
import styles from './Navbar.css';
import { Link } from 'react-router-dom';
import LogoIcon from '../../main/components/img/palette-icon.png'
import ProfileIcon from '../../main/components/img/profile-icon.png'
import MatchMediaWrapper from '../../mediaMatcher/mediaMatcher';

export default function Navbar(){

    const [isActive, setIsActive] = useState('')
    const [handleAtivo, setHandleAtivo] = useState('')
    const [isOpenned, setIsOpenned] = useState('closed')
    const [handleOpenned, setHandleOpenned] = useState(false)

    function handleClicked(){
        handleAtivo === '' ? setHandleAtivo('is-active') : setHandleAtivo('')
    }

    function handleNavbar(){
        !handleOpenned ? setHandleOpenned(true) : setHandleOpenned(false)
    }

    function navbarClicked(){
        if(handleOpenned === true){
            setIsOpenned('openned')
        }else if(handleOpenned === false){
            setIsOpenned('closed')
        }
    }

    function profileClicked(){
        if(isActive == '' && handleAtivo == '' || isActive == 'is-active' && handleAtivo == ''){
            setIsActive('')
        }else if(isActive == '' && handleAtivo == 'is-active' || isActive == 'is-active' && handleAtivo == 'is-active'){
            setIsActive('is-active')
        }
    }

    useEffect(() => {profileClicked(); navbarClicked()})

    let mobileContent = (
            <div className="navbar-item">
                <div className={isActive + ' dropdown is-right'} >
                    <div className="dropdown-trigger">
                        <button className='profile dropdown-toggle' aria-haspopup="true" aria-controls="dropdown-menu" onClick={handleClicked}><img className="profile-icon " src={ProfileIcon} alt='Profile Icon'/></button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                        <Link className="dropdown-item access-profile" to="/perfil">Minha área</Link>
                        <button className="dropdown-item logout">Sair</button>
                        </div>
                    </div>
                </div>
            </div>
    )

    let desktopContent = (
            <div className="navbar-item">
                <Link to="/login">
                    <button className='header-actions login'>Login</button>
                </Link>
                <Link to="/cadastro">
                    <button className='header-actions'>Cadastre-se</button>
                </Link>
                <div className={isActive + ' dropdown is-right'} >
                    <div className="dropdown-trigger">
                        <button className='profile dropdown-toggle' aria-haspopup="true" aria-controls="dropdown-menu" onClick={handleClicked}><img className="profile-icon " src={ProfileIcon} alt='Profile Icon'/></button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                        <Link className="dropdown-item access-profile" to="/perfil">Minha área</Link>
                        <button className="dropdown-item logout">Sair</button>
                        </div>
                    </div>
                </div>
            </div>
    )

    return (
        <div>
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <button className="navbar-item" onClick={handleNavbar}>
                        <img className="palette-hamburger" src={LogoIcon} alt='Palette Logo' />
                    </button>
                </div>
                <div className="navbar-end">
                    <MatchMediaWrapper mobileContent={mobileContent} desktopContent={desktopContent}/>
                </div>
            </nav>
            <div className={"sidebar-wrapper "+ isOpenned}>
                <div className={"sidebar sidebar-" + isOpenned}>
                    <div className="sidebar-top">
                        <Link className="sidebar-item" to="/home">Home</Link>
                        <Link className="sidebar-item" to="/perfil">Perfil</Link>
                        <Link className="sidebar-item" to="/palette">Criar paletas</Link>
                        <Link className="sidebar-item" to="/minhas-paletas">Minhas paletas</Link>
                    </div>
                    <div className="sidebar-down">
                        <button className="sidebar-item logout">Sair</button>
                    </div>
                </div>
            </div>
        </div > 
    )
}