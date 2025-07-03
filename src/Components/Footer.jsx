import React from 'react'

const footerDiv = {
    background: '#55D6C2',
    color: 'black',
    height: '5rem',
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: '1.2rem',
    lineHeight: '1.4rem',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: 1
};

const Footer = () => {
    return (
        <div style={footerDiv} className="d-flex align-items-center justify-content-center">
            <div style={{position: 'relative',left: 130}}>Footer Area</div>
        </div>
    )
}

export default Footer;