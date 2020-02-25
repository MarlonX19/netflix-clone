import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown/';

export default class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                <span style={{ marginLeft: '15%' }}>Question? Call <Link>+1 877-742-896</Link></span>
                <div className='footer-columns'>
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investors</Link>
                        </li>
                        <li>
                            <Link>Ways to watch</Link>
                        </li>
                        <li>
                            <Link>Company information</Link>
                        </li>
                        <li>
                            <Link>Netflix Originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Account</Link>
                        </li>
                        <li>
                            <Link>Redeem Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Privacy</Link>
                        </li>
                        <li>
                            <Link>Speed Test</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Help center</Link>
                        </li>
                        <li>
                            <Link>Jobs</Link>
                        </li>
                        <li>
                            <Link>Terms of use</Link>
                        </li>
                        <li>
                            <Link>Contact us</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>Media Center</Link>
                        </li>
                        <li>
                            <Link>Buy Gift Cards</Link>
                        </li>
                        <li>
                            <Link>Cookie Preferences</Link>
                        </li>
                        <li>
                            <Link>Legal Notices</Link>
                        </li>
                    </ul>
                    <div className='lang-btn'>
                        <Icon icon={iosWorld} size={20} />
                        &nbsp;&nbsp;English &nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} size={20} />
                    </div>
                </div>
            </FooterContainer>
        )
    }
}

const FooterContainer = styled.footer`
    background: var(--main-deep-dark);
    padding-top: 10rem;
    padding-bottom: 3rem;
    color: #999;

    .footer-columns {
        width: 70%;
        margin: 1rem auto 0;
        font-size: 0.9rem;
        overflow: auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    ul li {
        list-style: none;
        line-height: 2.5;
    }

    a {
        color: #999;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    .lang-btn {
        background: transparent;
        border: 0.9px solid #333;
        padding: 1rem;
        width: 10rem;
    }

`;
