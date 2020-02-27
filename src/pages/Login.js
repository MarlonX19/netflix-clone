import React, { Component } from 'react';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

import logo from '../assets/svg/logo.svg'
import LoginForm from '../components/login/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <div className='main-login-container'>
        <div className='header-top'>
          <Logo className='logo' src={logo} alt='img-logo' />
        </div>
        <LoginForm />
      </div>
    )
  }
}

//Logo style

const customMedia = generateMedia({
  lgDesktop: '1350px',
  mdDesktop: '1150px',
  tablet: '900px',
  smTablet: '740px'
})

const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('tablet')`
    width: 8rem;
  `}

`;
