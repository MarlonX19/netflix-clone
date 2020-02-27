import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from "styled-media-query";


export default class LoginForm extends Component {
    render() {
        return (
            <FormContainer>
                <div className='form-container'>
                    <form>
                        <h1 style={{ textAlign: 'center' }}>Sign in</h1>
                        <div className='input-container'>
                            <input className='input-empty' type='email' placeholder='Email or phone' required />
                        </div>
                        <div className='input-container'>
                            <input className='input-empty' type='password' placeholder='Password' required />
                        </div>
                        <div className='input-container'>
                            <Button type='submit'>Sign in</Button>
                        </div>
                        <label className='checkbox-container' >
                            Remember me
                            <input type='checkbox' checked />
                            <span className='checkmark'></span>
                        </label>
                        <Link to='/' className='need-help' >Need help?</Link>
                    </form>
                </div>
            </FormContainer>
        )
    }
}

const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px'
})

// FormContainer style
const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  z-index: 2;

  .form-container {
      background: rgba(0, 0, 0, 0.8);
      position: relative;
      width: 28.5rem;
      height: 25rem;
      padding: 4rem;
      ${customMedia.lessThan('tablet')`
        width: 20rem;
        height: 20rem;
        padding: 4rem;
        margin: 5% 5%;
    `}
  }

  .input-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 1.2rem;
      ${customMedia.lessThan('tablet')`
        margin-top: 0.8rem;
  `}
  }

  .input-empty {
      color: #fff;
      background: #333;
      border: 0;
      border-radius: 0.25rem;
      height: 3rem;
      padding: 0.9rem 1.25rem;
      outline: none;
      ${customMedia.lessThan('tablet')`
        height: 2rem;
        padding: 0.8rem 0.9rem;
    `}
  }


  form div {
      position: relative;
  }


    .checkbox-container {
     margin-left: 0.75rem;
     padding-left: 1.85rem;
     position: relative;
     font-size: 0.9rem;
     cursor: pointer;
     ${customMedia.lessThan('tablet')`
     margin-left: 0.55rem;
     padding-left: 1.2rem;
     font-size: 0.6rem;
    `}
 }

    .checkbox-container input {
        display: none;
}

.checkbox-container .checkmark {
    display: inline-block;
    background: #454545;
    width: 1.1rem;
    height: 1.1rem;
    left: 0;
    top: 0;
    border-radius: 0.1rem;
    position: absolute;
    ${customMedia.lessThan('tablet')`
        width: 0.8rem;
        height: 0.8rem;
   `}
}

.checkbox-container input:checked + .checkmark:after {
    content: '';
    position: absolute;
    height: 0.25rem;
    width: 0.625rem;
    border-left: 2px solid #000;
    border-bottom: 2px solid black;
    top: 25%;
    left: 21%;
    transform: rotate(-45deg);
}

.need-help {
    text-decoration: none;
    color: #828282;
    margin-left: 6.6rem;
    font-size: 0.9rem;
    &:hover {
        color: #fff;
    }

    ${customMedia.lessThan('tablet')`
        margin-left: 2rem;
        font-size: 0.6rem;
    `}
}

`;

const Button = styled.button` 
  color: #fff;
  background: rgba(229, 9, 20);
  border: none;
  outline: none;
  padding: 0.8rem 1.3rem;
  border-radius: 0.125rem;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 1.5px 0 rgba(0, 0, 0, 0.45);
  transition: opacity 0.2s ease-in;
  cursor: pointer;
  text-decoration: none;
  margin: 0.5rem 0;

`;
