import React from 'react';
import styled from 'styled-components';
import  booksImg  from './pexels-photo.jpg'
import '../App.css';

const HeaderImg = styled.div`
    margin: 0 auto;
    margin-left: 4.9%;
    position: absolute:
`;

const HeaderOne = styled.h1`
    position: relative;
    margin-top: -20%;
    margin-bottom: 10%;
    margin-left: 32%;
    color: white;
    font-size: 3rem;
`;


const Header = () => {
    return (
        <div className='header'>
            <HeaderImg>
                <img className='header-img' src={booksImg} alt="books"/>
            </HeaderImg>
            <HeaderOne>
                <h1>OER-BOOKR</h1>
            </HeaderOne>
        </div>
    )
  }
  
  export default Header