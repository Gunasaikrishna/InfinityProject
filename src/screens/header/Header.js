import React from "react";
import './Header.css';
import Logo from '../../assets/logo2.png';

function HeaderFunction() {
  return (
    <div className="title-wrapper">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="title">Infinity Groups</h1>
      </div>
    </div>
  );
}

export default HeaderFunction;
