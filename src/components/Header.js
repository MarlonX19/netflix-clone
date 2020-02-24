import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components'
import { Icon } from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import logo from '../assets/svg/logo.svg';


class Header extends Component {
    render() {
        return (
            <HeaderComponent className='header-container'>
                <div className='header-top'>
                    <Logo src={logo} />
                    <NavLink to="/signIn" className='signIn-btn'>Sign in</NavLink>
                </div>
                <div className='header-content'>
                    <Title>See what's new</Title>
                    <Subtitle>Watch anywhere, cancel anytime</Subtitle>
                    <Link className='main-offer-btn'>
                        Try it now
                        <Icon className='Icon' icon={ic_keyboard_arrow_right} size={37} />
                    </Link>
                </div>
            </HeaderComponent>
        )
    }
}

export default Header;

//Logo
const Logo = styled.img`
    width: 10rem;
    height: 3.5rem;
    position: absolute;
    top: 25%;
    left: 10%;
    transform: translate(-50%, -50%);
    `;



//Header container
const HeaderComponent = styled.div`
    .signIn-btn {
        right: 0;
        margin: 1.125rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 400;
        line-height: normal;
        border-radius: 0.1875rem;
        font-size: 1rem;
        background: var(--main-red);
        position: absolute;
        translate: transform(-50%, -50%);
        cursor: pointer;
        transition: background 0.2s ease-in;
        &:hover {
            background: var(--main-red-hover);
        }
    }

    .header-top {
        position: relative;
        height: 10rem;
        z-index: 1;
    }

    .header-content {
        width: 65%;
        position: relative;
        margin: 4.5rem auto 0;
        display: flex;
        justify-content: center;
        align-content: center;
        text-align: center;
        flex-direction: column;
        z-index: 1;
    }

    .main-offer-btn {
        display: inline-block;
        background: var(--main-red);
        text-transform: uppercase;
        border: none;
        outline: none;
        margin: 0 33%;
        padding: 1.4rem;
        border-radius: 0.1875rem;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
        transition: background 0.2s ease-in;
        cursor: pointer;
        &:hover {
            background: var(--main-red-hover);
        }
    }

    .Icon svg {
        vertical-align: bottom;
        margin-left: 1.5rem;

    }
`;

const Title = styled.h1`
    margin: 0 0 1.5rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.1rem;
    
`;

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25rem;
    margin: 1rem 0 2rem;
    text-transform: uppercase;
`;