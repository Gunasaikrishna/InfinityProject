import React from "react";
import './Header.css';
import Logo from '../../assets/InfinityLogo.jpg';

function HeaderFunction() {
  return (
    <div className="App">
      <div className="title-wrapper">
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 50 }}>
          <img src={Logo} alt="Logo" className="logo" />
          <h1 className="title">Infinity Groups</h1>
        </div>
      </div>
    </div>
  );
}

export default HeaderFunction;
