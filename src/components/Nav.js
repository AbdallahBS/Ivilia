import React from 'react'

function Nav() {
  return (
    <div> <nav className="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">

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
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#intro">INTRODUCTION</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#services">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#callMe">APPELEZ-MOI</a>
        </li>
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#projects">PROJETS</a>
        </li>
        {/* Menu déroulant */}
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle page-scroll" href="#about" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">À PROPOS</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="terms-conditions.html"><span className="item-text">CONDITIONS GÉNÉRALES</span></a>
            <div className="dropdown-items-divide-hr" />
            <a className="dropdown-item" href="privacy-policy.html"><span className="item-text">POLITIQUE DE CONFIDENTIALITÉ</span></a>
          </div>
        </li>
        {/* fin du menu déroulant */}
        <li className="nav-item">
          <a className="nav-link page-scroll" href="#contact">CONTACT</a>
        </li>
      </ul>
      <span className="nav-item social-icons">
        <span className="fa-stack">
          <a href="#your-link">
            <span className="hexagon" />
            <i className="fab fa-facebook-f fa-stack-1x" />
          </a>
        </span>
        <span className="fa-stack">
          <a href="#your-link">
            <span className="hexagon" />
            <i className="fab fa-twitter fa-stack-1x" />
          </a>
        </span>
      </span>
    </div>
    </nav></div>
  )
}

export default Nav