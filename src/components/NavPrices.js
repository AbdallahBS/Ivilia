import React from 'react'

function NavPrices() {
  return (
    <div> <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top" style={{backgroundColor:"#113448",height:"70px"}}>

    <a className="navbar-brand logo-image" href="index.html"><img src="images/logo.png" alt="alternative" style={{height: 60, width: 120}} /></a>
    {/* Bouton de basculement du menu mobile */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-awesome fas fa-bars" />
      <span className="navbar-toggler-awesome fas fa-times" />
    </button>
    {/* fin du bouton de basculement du menu mobile */}
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#header">ACCUEIL <span className="sr-only">(actuel)</span></a>
        </li>
  
        {/* Menu déroulant */}
      
        {/* fin du menu déroulant */}
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#contact">CONTACT</a>
        </li>
      </ul>

        {/* Wallet icon and TND price */}
        <span className="nav-item wallet-icon" style={{ marginLeft: '20px', color: '#fff', display: 'flex', alignItems: 'center' }}>
        <i className="fas fa-wallet" style={{ marginRight: '5px' }}></i>
        <span>100 TND</span>
      </span>
    </div>
    </nav></div>
  )
}

export default NavPrices