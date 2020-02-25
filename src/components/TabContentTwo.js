import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';

import tv from '../assets/images/tab-tv.png'
import tablet from '../assets/images/tab-tablet.png'
import macbook from '../assets/images/tab-macbook.png'


export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className='tab-content'>
                <div className='tab-top-content'>
                    <span>Watch TV shows and movies anytime, anywhere - personalized for you</span>
                    <Button className='btn' >Try it now</Button>
                </div>
                <div className='tab-bottom-content'>
                    <div>
                        <img src={tv} alt='tv image' style={{ width: '18.75rem'}} />
                        <h3>Assista em Smart TVs</h3>
                        <p>PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.</p>
                    </div>
                    <div>
                        <img src={tablet} alt='tv image' style={{ width: '18.75rem'}} />
                        <h3>Assista em Smart TVs</h3>
                        <p>PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.</p>
                    </div>
                    <div>
                        <img src={macbook} alt='tv image' style={{ width: '18.75rem', paddingTop: '0.626rem', paddingBottom: '0.626rem'}} />
                        <h3>Assista em Smart TVs</h3>
                        <p>PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros aparelhos.</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    );
}

const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 10%;
    }

    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }

    span {
        font-size: 1.5rem;
        grid-column: 1 / 8;
    }

    .btn {
        margin: 0 1.25rem;
        grid-column: 10 /12;
    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 3rem;
        text-align: center;
        margin-top: 2rem;
    }

    h3 {
        margin 0.5rem 0;
    }

    p {
        color: var(--main-grey);
    }
`;
