import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <div>
        {/* fin de la barre de navigation */}
<Nav/>
{/* end of navbar */}
{/* Header */}
<header id="header" className="header">
<div className="header-content">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="text-container">
          <h1>Le village des valeurs
             </h1>
          <p className="p-heading p-large">un domaine 100% bio respectant l'environnement et la planète</p>
          <a className="btn-solid-lg page-scroll" href="#intro">Découvrir</a>
        </div>
      </div> {/* end of col */}
    </div> {/* end of row */}
  </div> {/* end of container */}
</div> {/* end of header-content */}
</header> {/* end of header */}
{/* end of header */}
    </div>
  );
};

export default Header;
