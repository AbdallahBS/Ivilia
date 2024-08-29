import React from 'react';

const Intro = () => {
  return (
    <div>
            <div id="intro" className="basic-1">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="text-container">
            
            <h2>Nous offrons une
              nouvelle façon de
              s'ouvrir sur la
              nature</h2>
            <p>•La Tunisie, connue par sa beauté, son emplacement
              stratégique son cadre idyllique et paradisiaque a un
              potentiel bien plus elevé et a un coté non exploité que
              nous abordons au long de ce projet.
            </p>
            <p className="testimonial-text">•C'est au coeur de El fahs gouvernorat de Zaghouane que
              s'etends notre Domaine, au seuil de la montagne de
              Djebel Mansour se trouve ce petit monde unique en son
              genre."</p>
            <p>•Un microclimat, une source d'eau un cadre qui fait révé
              et riche en histoire, ressources ..</p>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-lg-7">
          <div className="image-container">
            <img className="img-fluid" src="images/intro-office.jpg" alt="alternative" />
          </div> {/* end of image-container */}
        </div> {/* end of col */}
      </div> {/* end of row */}
    </div> {/* end of container */}
  </div> {/* end of basic-1 */}
  {/* end of intro */}
    </div>
  );
};

export default Intro;
