import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import 'tachyons';
import brain from './brain.jpeg';

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{width: '100px'}}>
            <Tilt id="logo" className='Tilt br6 shadow-2'>
                <div className="Tilt-inner" style={{height: '100px', width: '100px'}}>
                    <h1><img src={brain} alt='logo' /></h1>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;