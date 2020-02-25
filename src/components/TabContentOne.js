import React from 'react';
import styled from 'styled-components';
import Img from '../assets/images/tab-1-pic.png';

import { Button } from './Button';


export default function TabContentOne() {
    return (
        <TabContentContainer className='container'>
            <div className='tab-content'>
                <div>
                    <span style={{ marginBottom: '2rem' }}>If you decide that Netflix isn't for you - no problem - you can cancel the service</span>
                    <br></br>
                    <Button style={{ marginTop: '2rem' }} >Try it now</Button>
                </div>
                <img src={Img} alt='Imagem' />
            </div>
        </TabContentContainer>
    );
}

const TabContentContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 10%;
    }

    img {
        width: 31.875rem;
    }

    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding: 1.5rem;
    }
`;
