import React from 'react'

function Footer() {
  return (
    <div>


<div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-container about">
            <h4>Quelques Mots Sur IVLIA</h4>
            <p className="white">Un microclimat, une source d'eau un cadre qui fait révé
            et riche en histoire, ressources ..</p>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-md-2">
          <div className="text-container">
            <h4>Links</h4>
            <ul className="list-unstyled li-space-lg white">
              <li>
                <a className="white" href="#your-link">startupguide.com</a>
              </li>
              <li>
                <a className="white" href="terms-conditions.html">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="white" href="privacy-policy.html">Privacy Policy</a>
              </li>
            </ul>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-md-2">
          <div className="text-container">
            <h4>Tools</h4>
            <ul className="list-unstyled li-space-lg">
              <li>
                <a className="white" href="#your-link">businessgrowth.com</a>
              </li>
              <li>
                <a className="white" href="#your-link">influencers.com</a>
              </li>
              <li className="media">
                <a className="white" href="#your-link">optimizer.net</a>
              </li>
            </ul>
          </div> {/* end of text-container */}
        </div> {/* end of col */}
        <div className="col-md-2">
          <div className="text-container">
            <h4>Partners</h4>
            <ul className="list-unstyled li-space-lg">
              <li>
                <a className="white" href="#your-link">unicorns.com</a>
              </li>
              <li>
                <a className="white" href="#your-link">staffmanager.com</a>
              </li>
              <li>
                <a className="white" href="#your-link">association.gov</a>
              </li>
            </ul>
          </div> 
        </div> 
      </div>
    </div> 
  </div> 

  <div className="copyright">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <p className="p-small">Copyright © 2024 <a href="https://inovatik.com">IVLIA</a></p>
        </div>
      </div>
    </div> 
  </div> 


    </div>
  )
}

export default Footer